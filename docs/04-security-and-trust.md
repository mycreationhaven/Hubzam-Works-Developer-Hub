# Security and trust boundaries

[Back to the Developer Hub](../README.md) · [Private vulnerability reporting](../SECURITY.md)

## Scope of these statements

This page separates controls observed in a targeted implementation review from practices an integration must follow. It is not a penetration-test report or a claim that every route has been independently audited.

Security relies on appropriate identity, authorization, validation, and operational controls. Keeping source private is an intellectual-property choice; it is not the security boundary.

## Observed controls

| Area | Observed behavior | Important boundary |
|---|---|---|
| Account authentication | The reviewed account flow verifies password hashes and account status | A successful login is not universal business access |
| Session validation | Authenticated requests resolve bearer sessions; revoked, expired, and inactive-account sessions are excluded | A token is a credential and must not be published or shared |
| Session persistence | The reviewed server session path stores a token hash | Do not infer how every browser/device stores its local state |
| Tenant access | Tenant-scoped read interfaces require a business context and invoke server-side access logic | A client-supplied company identifier is a request, not authority |
| Entity exposure | The reviewed generic read routes check whether an entity is enabled | They are not arbitrary database access |
| Staff POS context | POS operator workflows distinguish the staff member operating the register from the hosting app account | Staff PINs do not replace platform administrator credentials |
| Offline authorization | Offline-related modules include signed authorization, expiry checks, and conflict-related logic | Offline grants are limited capabilities, not unrestricted credentials |
| Database access | Reviewed authentication/profile operations use bound SQL parameters | This observation is not a complete SQL-injection audit |
| Arkovia login | Challenge/verification and identity-linking route families are present | Identity proof is separate from payment authority |

Exact credential derivation settings, signature message formats, private key locations, access-control implementation, and anti-abuse thresholds are not published.

## Identity, tenant, role, and operation

An authorization decision needs context: who is authenticated, which business is involved, which location or staff session applies, what operation is requested, and what state the target record is in.

Role names alone do not describe every permission. A manager in one business is not automatically a manager elsewhere. Platform-level administration is different from tenant ownership. An integration should request only the actions necessary for its approved use.

Hiding a control in the interface is useful for clarity, but it is not sufficient protection for the underlying action. Authorization belongs at the service boundary.

## Offline trust

Local data can be stale, modified, cleared, or unavailable. A sync submission must be treated as input for server validation. A signed authorization grant can establish a bounded authority claim; it does not prove that every local inventory number is current or that a payment processor completed a transaction.

Offline revocation cannot be assumed to reach an isolated device immediately. Expiry, bounded permissions, and reconciliation are relevant controls. Device theft and shared-device use remain operational risks.

## Payments and external callbacks

Payment integrations introduce an independent provider boundary. The intended model is to use provider-managed payment capabilities rather than making application documentation a place to collect card numbers or security codes.

Callback routes exist for approved providers. A publicly reachable callback is not an unauthenticated administrative interface. Provider-specific authenticity and replay handling must be assessed for each integration before it is relied upon; this documentation does not certify every handler.

## What we are not claiming

This publication does not assert SOC 2, ISO 27001, PCI DSS certification, universal MFA, complete end-to-end encryption, universal encryption at rest, a bug-bounty program, a guaranteed incident-response time, or an independent penetration test.

An HTTPS URL does not establish all of those properties. Installed cryptography libraries do not establish them either. Such claims require separate evidence and explicit publication.

## Responsibilities for developers

Use approved test environments, fictional records, and least-privilege access. Never place session tokens, passwords, staff PINs, payment credentials, private keys, or production exports in issues, examples, logs, screenshots, or pull requests. Treat unexpected cross-company access as a security concern and report it privately.

See [SECURITY.md](../SECURITY.md) for the reporting process.
