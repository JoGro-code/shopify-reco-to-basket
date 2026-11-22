# Cart recommendations for Shopify Dawn

This Dawn prototype reads the items already in the cart, requests Shopify product recommendations for each product, and displays up to four related products ranked by how often they appear.

## Try it in a draft theme

1. Duplicate your Dawn theme. Copy [cross-sell.js](Assets/cross-sell.js) into the draft theme's `assets` folder and [cart-cross-sell.liquid](sections/cart-cross-sell.liquid) into `sections`.
2. Use the [cart template example](templates/cart.json) to add the `cart-cross-sell` section to your existing cart template. Keep your cart's current sections and settings.
3. Update the hard-coded recommendation section ID in `cross-sell.js` to the renderer used by your theme. Use locale-aware Shopify URLs and remove the cart-response debug logging before testing with real shoppers. [Shopify Product Recommendations API](https://shopify.dev/docs/api/ajax/reference/product-recommendations)
4. Preview the draft with an empty cart and with multiple products. Check that suggestions load and that quantity updates and checkout still work.

## When a saved size sells out

RVI is a separate Shopify app for shoppers who return to a previously selected variant. Basic can show an orderable alternative in the exact same size when that size sells out and the shop has configured size matching. Try both the match and no-match cases in the [RVI size-replacement demo](https://recently-viewed-products.fly.dev/shopify-sold-out-despite-stock?locale=en&ref=github#find-size-replacement).
