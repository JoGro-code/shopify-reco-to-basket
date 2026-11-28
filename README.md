# Cart recommendations for Shopify Dawn

This Dawn prototype reads the items already in the cart, requests Shopify product recommendations for each product, and displays up to four related products ranked by how often they appear.

[Check a shoe size chart for free](https://recently-viewed-products.fly.dev/shopify-footwear-fit-check?locale=en&ref=github-dawn-cart#foot-length-audit). Preview two sizes using the manufacturer’s recommended foot lengths. RVI Free checks the chart against your own published Shopify sizes. Showing the comparison to shoppers in the cart uses RVI Basic.

If a saved shoe size sells out while it is still in the cart, [try the exact-size replacement flow in a browser](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=en&ref=github-dawn-cart#abc-cart). The example shows when a shopper can keep the original size and open the approved replacement.

## Try it in a draft theme

1. Duplicate your Dawn theme. Copy [cross-sell.js](Assets/cross-sell.js) into the draft theme's `assets` folder and [cart-cross-sell.liquid](sections/cart-cross-sell.liquid) into `sections`.
2. Use the [cart template example](templates/cart.json) to add the `cart-cross-sell` section to your existing cart template. Keep your cart's current sections and settings.
3. Preview the draft with an empty cart and with multiple products. Check that suggestions load when Shopify has related products, and that quantity updates and checkout still work. Repeat in each language you sell in. The section supplies its own ID and localized Shopify routes. [Shopify Product Recommendations API](https://shopify.dev/docs/api/ajax/reference/product-recommendations)

## When a saved size sells out

RVI Basic lets shoppers check for one approved, orderable replacement if their shoe size sells out while still in the cart. They open the exact variant in their market and decide whether to add it. Approve the pair in RVI, enable RVI product history on both product pages, and add **RVI cart replacement** to the cart template in a draft theme.

[Install RVI from Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Try the cart replacement flow](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=en&ref=github-dawn-cart#abc-cart) · [Audit stock and costs from your catalog](https://recently-viewed-products.fly.dev/shopify-variant-audit?locale=en#audit-form-heading)

### Auf Deutsch

Wird eine Schuhgröße ausverkauft, während sie noch im Warenkorb liegt, können Käufer mit RVI Basic nach einem freigegebenen, bestellbaren Ersatz suchen. Sie öffnen die genaue Variante in ihrem Markt und entscheiden selbst, ob sie diese hinzufügen. Gib das Paar in RVI frei, aktiviere den RVI-Produktverlauf auf beiden Produktseiten und füge **RVI-Ersatz im Warenkorb** zur Warenkorbvorlage eines Theme-Entwurfs hinzu.

[RVI über Shopify installieren](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_readme) · [Warenkorbersatz ausprobieren](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=de&ref=github-dawn-cart#abc-cart) · [Eigenen Katalog und Stückkosten prüfen](https://recently-viewed-products.fly.dev/shopify-variant-audit?locale=de#audit-form-heading)

### En français

[Rechercher un remplacement dans la même pointure](https://recently-viewed-products.fly.dev/shopify-footwear-fit-check?locale=fr&ref=github&via=approved-demo#footwear-pair). Collez le lien de la fiche Shopify d’origine, choisissez le pays de livraison et la pointure épuisée, puis cherchez les variantes disponibles dans ce marché. Vérifiez la variante et le chaussant avant de préparer la paire pour le bloc de remplacement du panier dans RVI Basic. Vous pouvez faire cette vérification avant d’installer l’application.

## Compare two shoe sizes in the cart

The optional **Compare cart sizes** block shows the manufacturer’s recommended foot lengths for two sizes of the same shoe in the cart.

1. [Check your shoe size chart for free before installing](https://recently-viewed-products.fly.dev/shopify-footwear-fit-check?locale=en&ref=github-dawn-cart#foot-length-audit). Paste the size and recommended foot-length columns with their headings and unit. Review the result and download the checked chart.
2. Continue to the free Shopify installation from the check. In RVI, open **Setup → Check a shoe size chart**, load a published product from your shop, select its size option and open the chart file. Free checks the match against the product’s sizes. Basic lets you confirm and save those measurements for the cart comparison.
3. In the **Cart** template of an unpublished theme, add the **Compare cart sizes** app block and enter the exact **Size option name** used in your store, such as `Size`.
4. In the storefront preview, add one unit each of two sizes of the same shoe product. Color and every other option must match. Open **Compare your two sizes**. Check both measurements and the product link. The shopper can keep both sizes in the cart.

If you already use the variant Decimal metafield `custom.rvi_foot_length_cm`, you can keep using verified single foot lengths in centimeters. [Shopify metafield setup](https://help.shopify.com/en/manual/custom-data/metafields/metafield-definitions/creating-custom-metafield-definitions)

[View RVI Basic on Shopify](https://recently-viewed-products.fly.dev/go/shopify/en-foot-length-audit-github-dawn-cart)

## Preview one cart add-on with a minimum contribution

In RVI Basic, open **Cart add-on test**. Start with one exact variant and up to three optional add-ons from Shopify's **Variants bought together** report. **Compare up to three cart add-ons** checks live Shopify prices and availability in the same country. Include shipping revenue you might lose, extra shipping costs, returns and the risk of losing existing purchases. Choose one candidate, then confirm its pair and costs in **Prepare one cart offer** to verify it again and generate a preview code. [See the worked contribution example](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=en&ref=github-dawn-cart#addon-contribution) · [Calculate the break-even return rate for a free shipping upsell](https://recently-viewed-products.fly.dev/shopify-free-shipping-upsell?locale=en&ref=github)

Add **Cart add-on preview** once to the Cart page of an unpublished theme and paste the code. In the signed-in Shopify Admin, open **Online Store → Themes** and choose **Preview** from the unpublished theme's actions. Keep your shop's primary domain and the selected buyer country. Use a cart containing one unit of the first variant without discounts. RVI rechecks the cart, exact price and stock before adding one unit of the second variant on request. The preview is for setup checks. Measuring the effect on profit requires a separate merchant test with paid orders and settled returns.

[View RVI Basic on Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_offer_pilot#adp-pricing) · [Shopify's variants bought together report](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/order-reports#items-bought-together)

### Zusatzangebot im Theme-Entwurf prüfen

Öffne in RVI Basic **Zusatzangebot im Warenkorb testen**. Prüfe bis zu drei genaue Zusatzartikel für eine Variante, ein Lieferland und dieselben Versandregeln. RVI berücksichtigt mögliche entfallene Käufe, Zusatzversand und Retouren. Wähle einen Kandidaten und bestätige das genaue Paar und seine Kosten erneut, um den Vorschaucode zu erzeugen. [Rechenbeispiel zum Deckungsbeitrag](https://recently-viewed-products.fly.dev/cart-recovery-tutorial?locale=de&ref=github-dawn-cart#addon-contribution) · [Kostendeckende Retourenquote bei Gratisversand berechnen](https://recently-viewed-products.fly.dev/shopify-free-shipping-upsell?locale=de&ref=github)

Füge **Zusatzangebot testen** im unveröffentlichten Theme einmal zur Warenkorbseite hinzu. Öffne als angemeldeter Händler unter **Onlineshop → Themes** die **Vorschau** des Theme-Entwurfs. Bleibe auf deiner Shop-Hauptdomain und wähle das Käuferland. Teste mit einem Stück der ersten Variante und ohne Rabatt. [RVI Basic auf Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_cart_offer_pilot#adp-pricing)

## Measure profit from one stockout replacement

RVI Basic can randomly show one approved, orderable replacement to half of eligible browsers opening the replacement check on the product page. Use one exact variant pair and one buyer country. Create the code in the Basic stockout worklist, then add it to the RVI block in Shopify’s theme editor. Verify that your analytics pixel receives the assignment and reconcile both groups with paid orders and refunds after the return window closes. [Shopify customer events](https://shopify.dev/docs/api/web-pixels-api/emitting-data)

For example, if 80 paid orders in the control group leave USD 3,100 after costs and refunds, and 100 paid orders in the RVI group leave USD 2,850, the treatment contributes USD 250 less per 1,000 eligible visits when both groups have 1,000. These figures illustrate the calculation. [RVI Basic on Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=en&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_stockout_trial_readme)

In **Compare contribution in a store trial**, select **Import one row per opportunity** and enter the two assignment counts from your experiment log. RVI reads the purchases, revenue and costs from a locally prepared CSV. Keep a row for each assigned opportunity, including people who did not buy. Mark unresolved outcomes before importing. RVI withholds the readout until those outcomes are resolved. If you work from grouped observations, choose **Enter group totals**. [Download the fictional CSV with 600 assignments per group](https://recently-viewed-products.fly.dev/samples/stockout-trial-opportunities.csv)

For the fictional file, use FR, EUR, September 1–7, 2026, and a 30-day follow-up through October 7, 2026. Enter 600 assignments for each group. Per 1,000 assigned opportunities, the replacement has EUR 7,000 more net merchandise revenue and contributes EUR 1,500 less after variable costs.

Prepare the CSV from your own matched records. Verify payment and refund status against Shopify records. An absent browser checkout event does not establish that no order was paid. The CSV stays in your browser. You can copy the result summary to your own AI tool to draft a follow-up test. [Shopify’s paid-order trigger](https://help.shopify.com/en/manual/shopify-flow/reference/triggers/order-paid) · [Shopify checkout event](https://shopify.dev/docs/api/web-pixels-api/standard-events/checkout_completed) · [Shopify’s refund transaction status](https://shopify.dev/docs/api/admin-graphql/latest/objects/refund)

### Mehr Käufe und Deckungsbeitrag gemeinsam prüfen

Teste in RVI Basic ein freigegebenes Variantenpaar für ein Käuferland. Die zufällige Zuteilung greift beim Öffnen der Ersatzprüfung auf der Produktseite. Erstelle den Code in der RVI-Arbeitsliste und füge ihn im Theme-Editor in den RVI-Block ein. Prüfe den Ereignisempfang in deinem Analyse-Pixel und gleiche nach Ablauf der Retourenfrist die Bestellungen und Erstattungen beider Gruppen ab. [RVI Basic auf Shopify](https://apps.shopify.com/recently-viewed-products-7?locale=de&utm_source=github&utm_medium=referral&utm_campaign=rvi_relaunch_202611&utm_content=dawn_stockout_trial_readme)

Wähle unter **Deckungsbeitrag im Shop-Test vergleichen** den Import mit einer Zeile je Gelegenheit. Übernimm die Gruppengrößen aus deinem Zuteilungsprotokoll und gleiche bezahlte Bestellungen und Erstattungen mit deinen Shopify-Berichten ab. Die CSV liefert Kaufzahlen, Warenumsatz und Kosten. Erfasse auch Gelegenheiten ohne Kauf und markiere ungeklärte Ergebnisse. RVI hält die Auswertung offen, bis diese Ergebnisse geklärt sind. [Fiktive CSV mit 600 Gelegenheiten pro Gruppe herunterladen](https://recently-viewed-products.fly.dev/samples/stockout-trial-opportunities.csv)

### Après un test sur une pointure épuisée

Dans RVI Basic, importez une ligne par occasion attribuée et saisissez les effectifs de votre registre de test. Vérifiez les paiements et remboursements dans les rapports Shopify. Si une commande reste à vérifier, marquez son résultat comme inconnu. La comparaison attend la résolution des résultats. [Exemple et étapes en français](https://recently-viewed-products.fly.dev/variant-recovery-setup?locale=fr&ref=github-trial#stockout-trial-csv)
