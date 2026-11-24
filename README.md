# Cart recommendations for Shopify Dawn

This Dawn prototype reads the items already in the cart, requests Shopify product recommendations for each product, and displays up to four related products ranked by how often they appear.

If a saved shoe size sells out while it is still in the cart, [try the exact-size replacement flow in a browser](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=en&ref=github-dawn-cart#abc-cart). The example shows when a shopper can keep the original size and open the approved replacement.

## Try it in a draft theme

1. Duplicate your Dawn theme. Copy [cross-sell.js](Assets/cross-sell.js) into the draft theme's `assets` folder and [cart-cross-sell.liquid](sections/cart-cross-sell.liquid) into `sections`.
2. Use the [cart template example](templates/cart.json) to add the `cart-cross-sell` section to your existing cart template. Keep your cart's current sections and settings.
3. Update the hard-coded recommendation section ID in `cross-sell.js` to the renderer used by your theme. Use locale-aware Shopify URLs and remove the cart-response debug logging before testing with real shoppers. [Shopify Product Recommendations API](https://shopify.dev/docs/api/ajax/reference/product-recommendations)
4. Preview the draft with an empty cart and with multiple products. Check that suggestions load and that quantity updates and checkout still work.

## When a saved size sells out

RVI Basic lets shoppers check for one approved, orderable replacement if their shoe size sells out while still in the cart. They open the exact variant in their market and decide whether to add it. Approve the pair in RVI, enable RVI product history on both product pages, and add **RVI cart replacement** to the cart template in a draft theme.

[Install RVI from Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Try the cart replacement flow](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=en&ref=github-dawn-cart#abc-cart) · [Audit stock and costs from your catalog](https://recently-viewed-products.fly.dev/shopify-variant-audit?locale=en#audit-form-heading)

### Auf Deutsch

Wird eine Schuhgröße ausverkauft, während sie noch im Warenkorb liegt, können Käufer mit RVI Basic nach einem freigegebenen, bestellbaren Ersatz suchen. Sie öffnen die genaue Variante in ihrem Markt und entscheiden selbst, ob sie diese hinzufügen. Gib das Paar in RVI frei, aktiviere den RVI-Produktverlauf auf beiden Produktseiten und füge **RVI-Ersatz im Warenkorb** zur Warenkorbvorlage eines Theme-Entwurfs hinzu.

[RVI über Shopify installieren](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Warenkorbersatz ausprobieren](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=de&ref=github-dawn-cart#abc-cart) · [Eigenen Katalog und Stückkosten prüfen](https://recently-viewed-products.fly.dev/shopify-variant-audit?locale=de#audit-form-heading)

## Measure profit from one stockout replacement

RVI Basic can randomly show one approved, orderable replacement to half of eligible browsers opening the replacement check on the product page. Use one exact variant pair and one buyer country. Create the code in the Basic stockout worklist, then add it to the RVI block in Shopify’s theme editor. Verify that your analytics pixel receives the assignment and reconcile both groups with paid orders and refunds after the return window closes. [Shopify customer events](https://shopify.dev/docs/api/web-pixels-api/emitting-data)

For example, if 80 paid orders in the control group leave USD 3,100 after costs and refunds, and 100 paid orders in the RVI group leave USD 2,850, the treatment contributes USD 250 less per 1,000 eligible visits when both groups have 1,000. These figures illustrate the calculation. [RVI Basic on Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_stockout_trial_readme)

In **Review the trial decision**, paste grouped outcomes for both arms after reconciling the paid orders and refunds. Include assigned opportunities without a purchase. RVI checks the CSV against your totals and estimates separate ranges for merchandise revenue and contribution per 1,000 opportunities. If the contribution range crosses zero, the decision remains open. You can copy the summary to your own AI tool to draft a follow-up test. The CSV stays in your browser. [Shopify’s paid-order trigger](https://help.shopify.com/en/manual/shopify-flow/reference/triggers/order-paid) · [Shopify’s refund transaction status](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund)

### Mehr Käufe und Deckungsbeitrag gemeinsam prüfen

Teste in RVI Basic ein freigegebenes Variantenpaar für ein Käuferland. Die zufällige Zuteilung greift beim Öffnen der Ersatzprüfung auf der Produktseite. Erstelle den Code in der RVI-Arbeitsliste und füge ihn im Theme-Editor in den RVI-Block ein. Prüfe den Ereignisempfang in deinem Analyse-Pixel und gleiche nach Ablauf der Retourenfrist die Bestellungen und Erstattungen beider Gruppen ab. [RVI Basic auf Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_stockout_trial_readme)

Füge unter **Testergebnis bewerten** die gruppierten Ergebnisse beider Gruppen ein. Erfasse auch zugeteilte Kaufgelegenheiten ohne Kauf. RVI prüft die CSV gegen deine Summen und zeigt getrennte Intervalle für Warenumsatz und Deckungsbeitrag je 1.000 Gelegenheiten. Umfasst das Deckungsbeitragsintervall null, bleibt die Entscheidung offen. Du kannst die Zusammenfassung an dein eigenes KI-Tool übergeben, um einen Folgetest zu entwerfen. Die CSV bleibt in deinem Browser.
