# Business workflows and domain boundaries

[Back to the Developer Hub](../README.md)

## Products and variants

A parent product describes a catalog item. A variant distinguishes a selectable version such as a size, flavor, or edition. Variant selection must remain associated with the order line; the parent record alone is insufficient to describe the customer's purchase.

Public product visibility, POS visibility, inventory tracking, discount eligibility, and wholesale eligibility are separate settings. Publishing a product does not automatically authorize internal price changes.

Product costs and public selling prices serve different purposes. Cost records support accounting; price records describe a commercial offer. Proprietary cost-estimation and pricing formulas are not published here.

## Sale and payment

A typical online POS lifecycle is:

1. Establish the authenticated business and staff context.
2. Select the customer and eligible products or variants.
3. Apply available pricing and discount rules to the intended items.
4. Review totals and choose the tender.
5. Complete the appropriate server/payment workflow.
6. Retain the order, receipt, inventory effects, and any required follow-up work.

A payment attempt is not the same as a completed payment. A receipt or local order record must not be treated as proof that a processor accepted a card transaction. Payment status, order status, and fulfillment state have different meanings.

### Pricing and discounts

Wholesale, Bulk Buy, ordinary discounts, and other product-level offers represent different eligibility paths. Wholesale is associated with approved account eligibility; Bulk Buy concerns purchase requirements; ordinary discounts can describe amount or percentage offers.

Multiple adjustments can apply where the active configuration permits them. Eligibility, selected lines, ordering, and the resulting total must be checked by the transaction workflow. Display labels should make the applied adjustments understandable. This guide intentionally does not publish private pricing formulas or promise a universal stacking rule for every release.

## Inventory and receiving

Sales and receiving affect availability in opposite directions. Manual adjustments are distinct operations requiring appropriate authority. Concurrent activity can create conflicting views of available stock, especially when a device has been offline.

Revision-aware inventory interfaces exist to help distinguish a current adjustment from an operation based on stale state. A count shown on an offline device should not be interpreted as a reservation against every other device.

## Warehouse and production

Warehouse records can be linked to catalog products. Operational work may continue after a sale, including production, kiln-related handling, preparation, or shipping depending on the business's setup. A paid order need not mean all such work is complete.

Developers should preserve the distinction between inventory quantities, physical production tasks, and customer-facing order status rather than collapsing them into one boolean.

## Rentals

Rental availability concerns a physical copy, not merely a movie or product title. Checkout associates a customer with a copy and an expected lifecycle. A return records the customer's return event; inspection and restocking determine when the physical item is ready for another rental.

Membership entitlements and rental slots are related to customer eligibility but remain distinct from physical-copy condition. Exact deadlines, fees, rating policies, and entitlement calculations depend on the configured offering and are not universal API guarantees.

## Bookings

A booking combines a service, a customer, a schedule, and relevant capacity or resources. Displaying an available service is different from successfully reserving its capacity. Availability can change before confirmation, so integration designs must account for rejected or changed selections.

## Loyalty and accounting

Loyalty activity relates to eligible transactions and adjustments. An account balance should have an understandable history rather than being treated as an arbitrary display number. Returns or reversals can require corresponding reward handling.

Reports combine records according to date ranges and business definitions. Revenue, payments received, discounts, cost of goods, expenses, and profit are not interchangeable figures. Report consumers should state their date filters and the meaning of each metric. The existence of accounting-related screens is not a claim that Hubzam Works replaces professional accounting advice or every external accounting system.

## Illustrative example

A fictional customer buys two pottery variants and books a workshop. The sale, the chosen variants, the inventory movement, and the workshop reservation are related records with separate responsibilities. If production work remains, staff can still need to complete that work after payment.

No real customer identifiers, product records, or transaction data are used in this repository.
