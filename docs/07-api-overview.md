# API overview and access model

[Back to the Developer Hub](../README.md) · [Route reference](08-api-capability-reference.md)

## What is published

Hubzam Works has HTTP interfaces for identity, tenant context, selected data access, offline synchronization, inventory operations, integrations, and business-function dispatch.

This documentation describes selected deployed route families. It is an **interface inventory**, not an unrestricted public developer API launch. A route can be reachable by the browser application while remaining unsuitable for external automation.

| Classification | Meaning |
|---|---|
| Public application surface | Supports an intended unauthenticated website or account-starting workflow; still subject to validation and acceptable use |
| Authenticated application surface | Used by authorized Hubzam users and the first-party application |
| Privileged application surface | Requires the relevant management, business, or operation-level authority |
| Approved provider callback | Accepts a provider event under that integration's verification requirements |
| Internal implementation surface | Not a supported third-party contract, even if the application uses it |
| Proposed integration contract | Must be reviewed and agreed before an external developer relies on it |

No general API-key issuance process, OAuth client registration service, public SDK, guaranteed sandbox, or third-party rate allowance is announced by this repository.

## Authentication

The reviewed first-party API resolves **bearer session tokens**. An authenticated request includes an Authorization header. The server checks session expiry, revocation, and account state. A session is not a substitute for tenant membership or permission for the requested operation.

The following is protocol notation, not a working credential or integration approval:

```http
GET /api/v1/auth/me
Authorization: Bearer <approved-session-token>
Accept: application/json
```

Do not embed real sessions in documentation, code examples, browser screenshots, shared API collections, or support tickets. An external service should obtain an approved integration authentication contract rather than borrowing a staff member's browser session.

## Tenant context

Tenant-scoped operations need an authorized business context. Location and staff POS context may add further constraints. Supplied identifiers select the intended scope; they do not establish permission.

Entity reads are enabled selectively. A generic route name must never be interpreted as permission to enumerate tables, search other businesses, or download every field.

## Data and transport

Reviewed routes use JSON for many request/response bodies. Uploads and provider callbacks may require other encodings. Obtain the exact operation contract before assuming a content type, pagination policy, filtering syntax, or response envelope.

Do not assume a single response envelope across all services. For example, the selected entity-list route returns a data array, while an identity route returns user fields directly.

## Errors and retries

| HTTP outcome | Interpretation for an integration |
|---|---|
| 200 / 201 | The requested HTTP operation succeeded according to that route's contract |
| 400 | Correct invalid or missing input before retrying |
| 401 | Authentication is absent or invalid |
| 403 | The account or requested operation is not allowed |
| 404 | The route/resource may not exist or may not be exposed |
| 409 | A state conflict may need user review or refreshed state |
| 5xx | A service failure occurred; do not assume a write did not happen |

This is interpretation guidance, not a guarantee that every endpoint emits every status consistently. Do not automatically retry charges, inventory mutations, or order creation without an agreed duplicate-handling contract. A network timeout does not prove the server made no change.

No numeric rate limit or retry schedule is published here. Do not interpret that absence as unlimited access.

## Version and compatibility

Some application routes use an /api/v1 prefix. Other public-site and integration routes do not. The prefix alone does not establish a third-party stability guarantee.

Before releasing an integration, agree on the approved routes, credential lifecycle, permissions, data minimization, error cases, retry semantics, provider responsibilities, and change-notification process.

## Machine-readable reference

[openapi.interface-inventory.json](../api/openapi.interface-inventory.json) is a deliberately limited description of selected observed read interfaces. It does not contain production credentials, server deployment configuration, write payload internals, or a complete product API. Schemas are intentionally descriptive rather than falsely precise.

Do not import the file into an automated production test runner without approval.
