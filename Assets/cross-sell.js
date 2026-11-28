(() => {
  const sectionSelector = "[data-cross-sell-section]";
  const productIdPattern = /^[1-9][0-9]*$/;
  const sectionIdPattern = /^[a-zA-Z0-9_-]+$/;
  const requestOptions = { credentials: "same-origin", redirect: "error" };

  function readLocalRoute(path, suffix) {
    if (!path?.startsWith("/") || path.startsWith("//")) return null;
    const route = new URL(path, window.location.origin);
    return route.origin === window.location.origin && route.pathname.endsWith(suffix) &&
      !route.search && !route.hash ? route : null;
  }

  async function fetchCards(endpoint, sectionId, productId) {
    const route = new URL(endpoint);
    route.search = new URLSearchParams({
      section_id: sectionId,
      product_id: productId,
      limit: "10",
      intent: "related",
    });

    try {
      const response = await fetch(route, requestOptions);
      if (!response.ok) return [];
      const document = new DOMParser().parseFromString(await response.text(), "text/html");
      const results = document.querySelectorAll("[data-cross-sell-results]");
      if (results.length !== 1 || results[0].dataset.crossSellResults !== sectionId) return [];
      return Array.from(results[0].children);
    } catch {
      return [];
    }
  }

  async function loadCrossSell(section) {
    const { crossSellSection: sectionId, cartUrl, recommendationsUrl } = section.dataset;
    const grid = section.querySelector("[data-cross-sell-list]");
    if (!sectionIdPattern.test(sectionId || "") || !grid || section.dataset.crossSellInitialized) return;
    section.dataset.crossSellInitialized = "true";

    try {
      const cartRoute = readLocalRoute(cartUrl, "/cart.js");
      const recommendationsRoute = readLocalRoute(recommendationsUrl, "/recommendations/products");
      if (!cartRoute || !recommendationsRoute) return;
      const response = await fetch(cartRoute, requestOptions);
      if (!response.ok) return;
      const cart = await response.json();
      if (!Array.isArray(cart.items)) return;
      const productIds = [...new Set(cart.items.map(({ product_id }) => String(product_id))
        .filter((id) => productIdPattern.test(id)))];

      const responses = await Promise.all(productIds.map((id) => fetchCards(recommendationsRoute, sectionId, id)));
      const rankedCards = new Map();
      for (const cards of responses) {
        const seen = new Set();
        for (const card of cards) {
          if (card.tagName !== "LI") continue;
          const id = card.dataset.crossSellProduct;
          if (!productIdPattern.test(id || "") || seen.has(id)) continue;
          seen.add(id);
          const result = rankedCards.get(id) || { card, count: 0 };
          result.count += 1;
          rankedCards.set(id, result);
        }
      }

      const selected = [...rankedCards.values()].sort((left, right) => right.count - left.count)
        .slice(0, 4).map(({ card }) => card);
      if (section.isConnected) {
        grid.replaceChildren(...selected);
        grid.hidden = selected.length === 0;
      }
    } catch {
      // Recommendations are optional. Leave the cart and checkout usable.
    }
  }

  function initialize(root) {
    if (root.matches?.(sectionSelector)) void loadCrossSell(root);
    for (const section of root.querySelectorAll(sectionSelector)) void loadCrossSell(section);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initialize(document), { once: true });
  } else {
    initialize(document);
  }

  document.addEventListener("shopify:section:load", (event) => initialize(event.target));
})();
