# Privacy and data handling

[Back to the Developer Hub](../README.md)

## Purpose and limits

This is a technical explanation of data handling boundaries. It does not replace the applicable privacy notice, a customer contract, a data-processing agreement, or jurisdiction-specific legal requirements.

No retention period, deletion completion time, data-residency guarantee, or regulatory certification is established by this document. Those commitments must be provided separately by the responsible operator.

## Data categories

| Category | Why the platform may process it | Who should need it |
|---|---|---|
| Account identity and contact information | Sign-in, communications, and account administration | The account holder and authorized service/business roles |
| Customer and transaction records | Sales, receipts, bookings, rentals, and support | The relevant business and appropriately authorized users |
| Product and inventory information | Catalog display, stock handling, and fulfillment | Public visitors for published fields; staff for internal fields |
| Staff access and activity | Operational access and business accountability | Authorized management and platform operations |
| Loyalty-related records | Eligibility, rewards, and account history | The member and authorized business workflows |
| Uploaded files | Product images and authorized operational content | Audiences permitted for each file's purpose |
| Security/session metadata | Session validation and operational investigation | Restricted service and administrative workflows |
| Browser-local records | Supported offline continuity and pending synchronization | The authorized user/device context |

Cost information, private notes, staff records, and customer information should not be confused with public shop data. Publication to a public catalog requires an appropriate public representation, not a raw export of internal records.

## Browser-local storage

Offline features can store relevant business data on the device using browser storage. This can improve continuity during an outage, but it also means privacy depends partly on device access and browser-profile security.

Clearing browser storage can remove unsynchronized work. Shared computers, private browsing, storage eviction, and lost devices require special care. Do not assume browser storage is encrypted by Hubzam, survives every browser update, or can be remotely wiped merely because it is local-first.

An integration must avoid caching more personal data than its approved workflow needs. A screenshot of an offline queue can expose customer details just as a server export can.

## External providers

Payments, email, and optional integrations can involve external service providers. The exact provider, account configuration, processed fields, and geographic handling depend on the enabled service. The presence of an integration module does not prove that all customers use it.

A wallet-based login proves an identity relationship when verified; it should not be described as publishing customer orders or personal details to a blockchain. Identity linking, rewards balances, and on-chain transactions are separate concepts.

## Transparency for customers and businesses

A useful explanation should state what data is needed, why it is needed, which audience can access it, whether it is locally cached, and whether a provider is involved. Changes in data purpose should be reviewed rather than silently expanding an integration's access.

The platform supports business workflows, but businesses and platform operators may have different responsibilities depending on their relationship and jurisdiction. Do not assume this page assigns a formal controller/processor role.

## Requests and publication safety

Use an established private support channel for account-data questions. Identity verification and the applicable retention obligations may be relevant before an export or deletion request can be completed. This guide does not promise a particular self-service export/deletion endpoint.

Public contributions must use fictional people, synthetic identifiers, and scrubbed examples. Do not upload production receipts, order exports, customer emails, staff PINs, or identifiable children's information. Remove sensitive metadata from screenshots and files as well as their visible content.

## Items requiring separate publication

Formal retention schedules, subprocessors, data residency, backup retention, account deletion procedures, breach communication commitments, and child-specific consent arrangements require a maintained policy or contractual record. They are not inferred from the software stack.
