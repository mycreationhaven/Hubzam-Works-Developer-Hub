# Platform overview

[Back to the Developer Hub](../README.md)

## What Hubzam Works does

Hubzam Works brings related business operations into one browser-based platform. A sale is connected to the customer and products involved, inventory activity, payment state, and downstream work. A rental also concerns a particular physical copy and its availability. A booking concerns capacity and scheduling as well as payment. These relationships are more useful than isolated screens that maintain unrelated versions of the same transaction.

The platform serves customer-facing users, cashiers or ambassadors, managers, company and studio owners, and platform administrators. These are different audiences with different permissions; a public shop visitor does not receive internal business access.

## Capability map

| Area | Responsibility | Important relationships |
|---|---|---|
| Product catalog | Product identity, images, variants, prices, visibility, and availability settings | POS, shop, stock, warehouse |
| POS and orders | Cart selection, customers, discounts, tender, receipts, and order records | Payments, inventory, fulfillment, reporting |
| Inventory | Stock changes, receiving, availability, and reconciliation | Products, sales, rentals, warehouse |
| Warehouse and production | Warehouse records, linked products, and operational work | Inventory, catalog, fulfillment |
| Rentals | Physical copies, availability, checkout, return, and processing status | Customers, copies, orders, membership entitlements |
| Bookings | Services, capacity, scheduling, and reservation workflows | Customers, resources, payments |
| Customer accounts | Identity, contact information, account relationships, and preferences | Orders, bookings, rentals, loyalty |
| Loyalty and rewards | Reward-related balances and transaction activity | Customers, eligible orders, adjustments |
| Accounting and reports | Business summaries, cost-related views, and operational reports | Orders, costs, expenses, staff activity |
| Staff operations | Staff access and operational responsibilities, including scheduling/time-related functions | Company, location, role |
| Public website | Public catalog and customer-facing business information | Published data and customer account capabilities |

These describe system domains, not a promise that every feature is enabled in every tenant or available while offline. Availability must be checked against the deployed release.

## A shared business context

A **tenant** is a business boundary. A company or studio can have one or more locations. A user's relationship with that business determines what they can see or change. Platform-level privileges and tenant-specific privileges should not be confused.

A product ID identifies a record; it is not an access credential. Selecting a company or changing a URL does not grant membership in that company. Access must be evaluated on the server.

## State is part of the product

An order can exist before it is paid. An item can be sold before all production or shipping work finishes. A returned rental copy can remain unavailable until inspection and restocking. Keeping these states distinct helps staff understand what actually happened rather than assuming one status implies every other operation is complete.

## What this documentation deliberately leaves out

This guide does not publish source files, internal table definitions, installation instructions, transaction heuristics, commercial pricing formulas, or a clone-ready implementation plan. It documents outcomes and responsibilities so developers can reason about interoperability and propose improvements.
