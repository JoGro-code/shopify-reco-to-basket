// assets/cross-sell.js

document.addEventListener("DOMContentLoaded", function () {
  //console.log("DOM fully loaded and parsed"); // Debugging-Ausgabe

  const crossSellContainer = document.getElementById("cross-sell-products");
  if (!crossSellContainer) {
    console.error("Cross-sell container not found.");
    return;
  }

  const fullSectionId = crossSellContainer.getAttribute("data-section-id");
  if (!fullSectionId) {
    console.error("Section ID not found.");
    return;
  }

  const sectionId = extractSectionId(fullSectionId);
  console.log("Section ID:", sectionId); // Debugging-Ausgabe

  fetch("/cart.js")
    .then((response) => response.json())
    .then((cartData) => {
      console.log("Cart Data:", cartData); // Debugging-Ausgabe
      const productIds = cartData.items.map((item) => item.product_id);
      console.log("Product IDs:", productIds); // Debugging-Ausgabe
      const crossSellPromises = productIds.map((productId) =>
        fetchCrossSellForProduct(productId, sectionId)
      );
      Promise.all(crossSellPromises)
        .then((crossSellHtmlArray) => {
          console.log("Cross Sell HTML Array:", crossSellHtmlArray); // Debugging-Ausgabe
          // Using setTimeout to delay the processing and ensure all data is collected
          setTimeout(() => {
            const totalCrossSellHtmlArray = crossSellHtmlArray.flat();
            const orderedProducts = flattenAndCount(totalCrossSellHtmlArray);
            console.log("Ordered Products:", orderedProducts.slice(0, 4)); // Debugging-Ausgabe
            displayCrossSellProducts(orderedProducts.slice(0, 4));
          }, 1000); // Delay of 1 seconds
        })
        .catch((error) => {
          console.error("Error in fetching cross-sell products:", error);
        });
    })
    .catch((error) => {
      console.error("Error in fetching cart data:", error);
    });
});

function extractSectionId(fullSectionId) {
  const match = fullSectionId.match(/template--(\d+)/);
  return match ? match[1] : null;
}

function fetchCrossSellForProduct(productId, sectionId) {
  const url = `/recommendations/products?section_id=template--22515674349893__related-products&product_id=${productId}&limit=10`;
  console.log("Fetching cross-sell products from URL:", url); // Debugging-Ausgabe
  return fetch(url)
    .then((response) => response.text())
    .then((htmlText) => {
      console.log("Cross Sell Response Text for Product:", productId, htmlText); // Debugging-Ausgabe
      return htmlText;
    })
    .catch((error) => {
      console.error(
        `Error fetching cross-sell products for product ID ${productId}:`,
        error
      );
    });
}

function flattenAndCount(crossSellHtmlArray) {
  const productCount = {};
  const parser = new DOMParser();

  crossSellHtmlArray.forEach((htmlText) => {
    const doc = parser.parseFromString(htmlText, "text/html");
    const items = doc.querySelectorAll(".grid__item");

    items.forEach((item) => {
      const itemHtml = item.outerHTML;
      if (productCount[itemHtml]) {
        productCount[itemHtml]++;
      } else {
        productCount[itemHtml] = 1;
      }
    });
  });

  const orderedProducts = Object.entries(productCount)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  console.log("Ordered Products by Frequency:", orderedProducts); // Debugging-Ausgabe

  // Remove duplicates to keep only unique items
  const uniqueProducts = [...new Set(orderedProducts)];
  console.log("Unique Ordered Products:", uniqueProducts); // Debugging-Ausgabe

  return uniqueProducts;
}

function displayCrossSellProducts(productHtmlArray) {
  const container = document.getElementById("cross-sell-products");
  if (!container) return;

  console.log("Displaying Products:", productHtmlArray); // Debugging-Ausgabe

  container.innerHTML = ""; // Clear existing content

  // Create the <ul> element with the specified classes
  const ulElement = document.createElement("ul");
  ulElement.className =
    "grid product-grid grid--4-col-desktop grid--2-col-tablet-down";
  ulElement.setAttribute("role", "list");

  // Process each product HTML to ensure only the inner <li> is used
  productHtmlArray.forEach((productHtml) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = productHtml.trim();

    // Find the inner <li class="grid__item">
    const innerLi = tempDiv.querySelector("li.grid__item");
    if (innerLi) {
      ulElement.appendChild(innerLi);
    } else {
      console.error(
        'Inner <li class="grid__item"> not found in product HTML:',
        productHtml
      );
    }
  });

  // Append the <ul> to the container
  container.appendChild(ulElement);
}
