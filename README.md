# Cart recommendations for Shopify Dawn

This Dawn prototype reads the items already in the cart, requests Shopify product recommendations for each product, and displays up to four related products ranked by how often they appear.

If a shoe size sells out after the shopper added it to the cart, see [the RVI cart block](#when-a-saved-size-sells-out).

## Try it in a draft theme

1. Duplicate your Dawn theme. Copy [cross-sell.js](Assets/cross-sell.js) into the draft theme's `assets` folder and [cart-cross-sell.liquid](sections/cart-cross-sell.liquid) into `sections`.
2. Use the [cart template example](templates/cart.json) to add the `cart-cross-sell` section to your existing cart template. Keep your cart's current sections and settings.
3. Update the hard-coded recommendation section ID in `cross-sell.js` to the renderer used by your theme. Use locale-aware Shopify URLs and remove the cart-response debug logging before testing with real shoppers. [Shopify Product Recommendations API](https://shopify.dev/docs/api/ajax/reference/product-recommendations)
4. Preview the draft with an empty cart and with multiple products. Check that suggestions load and that quantity updates and checkout still work.

## When a saved size sells out

RVI Basic lets shoppers check for one approved, orderable replacement if their shoe size sells out while still in the cart. They open the exact variant in their market and decide whether to add it. Approve the pair in RVI, enable RVI product history on both product pages, and add **RVI cart replacement** to the cart template in a draft theme.

[Install RVI from Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Try an approved size pair](https://recently-viewed-products.fly.dev/shopify-approved-footwear-demo?locale=en&ref=github)

### Auf Deutsch

Wird eine Schuhgröße ausverkauft, während sie noch im Warenkorb liegt, können Käufer mit RVI Basic nach einem freigegebenen, bestellbaren Ersatz suchen. Sie öffnen die genaue Variante in ihrem Markt und entscheiden selbst, ob sie diese hinzufügen. Gib das Paar in RVI frei, aktiviere den RVI-Produktverlauf auf beiden Produktseiten und füge **RVI-Ersatz im Warenkorb** zur Warenkorbvorlage eines Theme-Entwurfs hinzu.

[RVI über Shopify installieren](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Freigegebenes Größenpaar ausprobieren](https://recently-viewed-products.fly.dev/shopify-approved-footwear-demo?locale=de&ref=github)
