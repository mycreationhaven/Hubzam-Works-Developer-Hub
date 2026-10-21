# Selected API capability reference

[Back to the Developer Hub](../README.md) · [Access model](07-api-overview.md)

**Baseline: October 21, 2026.** Paths below were observed in deployed route definitions. Presence is not proof of current provider configuration, universal role access, or a stable third-party contract. Examples are fictional. Private payload specifications remain subject to integration review.

## Account and session interfaces

| Method | Route | Purpose | Boundary |
|---|---|---|---|
| POST | /api/v1/auth/register | Begin account registration | Public account workflow; validation and verification apply |
| POST | /api/v1/auth/login | Authenticate an eligible account | Public credential submission; no embedded credentials published |
| POST | /api/v1/auth/otp/resend | Request a verification-code resend | Verification workflow; not unrestricted messaging |
| POST | /api/v1/auth/otp/verify | Submit a verification code | Account-verification rules apply |
| GET | /api/v1/auth/me | Read the current authenticated identity | Bearer session required |
| PATCH | /api/v1/auth/me | Update supported self-profile fields | Authenticated; not a role/tenant membership editor |
| POST | /api/v1/auth/logout | End the relevant session workflow | Follow the session contract |
| POST | /api/v1/auth/password-reset/request | Start password recovery | Public recovery workflow |
| POST | /api/v1/auth/password-reset/complete | Complete a validated reset | Recovery proof required |
| POST | /api/v1/auth/change-password | Change account credentials | Authenticated credential workflow |

Password recovery, one-time codes, and password changes should be implemented only against the approved contract. This reference does not publish reset-token layouts, exact credential policy, or anti-abuse thresholds.

## Arkovia identity interfaces

| Method | Route | Purpose |
|---|---|---|
| POST | /api/v1/auth/arkovia/login/challenge | Request the sign-in challenge workflow |
| POST | /api/v1/auth/arkovia/login/verify | Submit challenge proof for verification |
| GET | /api/v1/auth/arkovia/identities | Read the authenticated account's linked identities |
| POST | /api/v1/auth/arkovia/link/challenge | Begin an authenticated identity-linking workflow |
| POST | /api/v1/auth/arkovia/link/verify | Verify the requested identity link |

These prove an identity relationship. They do not authorize payments, reveal a secret phrase, or imply that customer records are written on-chain. Exact signature formats and signing instructions are not part of this public interface inventory.

## Tenant and approved data reads

| Method | Route | Purpose |
|---|---|---|
| GET | /api/v1/tenant/bootstrap | Retrieve the authenticated user's available business context |
| GET | /api/v1/entities/{entity} | List an enabled entity within an authorized company |
| POST | /api/v1/entities/{entity}/filter | Filter an enabled entity within an authorized company |

The reviewed list route requires company_id and accepts limit, offset, and sort inputs. Their accepted bounds and field vocabulary must be agreed for the entity being integrated. Entity names are allowlisted; this guide does not expose an internal database inventory.

Illustrative entity-list request:

```http
GET /api/v1/entities/<approved-entity>?company_id=fictional-company&limit=20&offset=0
Authorization: Bearer <approved-session-token>
Accept: application/json
```

An empty successful response from that route has this shape:

```json
{
  "data": []
}
```

The placeholder entity and company must be replaced only with values authorized for the integration. This example is not a production URL or a method for discovering identifiers.

For an unauthenticated request to a route using the reviewed authentication middleware, the error shape can be:

```json
{
  "error": "Unauthorized",
  "code": "AUTH_REQUIRED"
}
```

Other handlers can return different error fields. Do not infer one universal error schema.

## Offline POS and inventory interfaces

| Method | Route | Purpose | Access classification |
|---|---|---|---|
| GET | /api/v1/pos/offline-bootstrap | Obtain eligible company/location offline context | Authenticated application |
| POST | /api/v1/pos/offline-grant | Request bounded offline authorization | Authenticated plus staff/operation checks |
| POST | /api/v1/pos/sync | Submit pending offline orders for validation | Authenticated application |
| POST | /api/v1/pos/offline-conflicts/review | Review an offline conflict | Operation-specific authority |
| POST | /api/v1/pos/offline-conflicts/resolve | Resolve a reviewed conflict | Operation-specific authority |
| POST | /api/v1/inventory/adjust | Submit an inventory adjustment | Authorized inventory operation |
| POST | /api/v1/inventory/receive | Submit receiving activity | Authorized receiving operation |

Payload formats, signed grants, replay handling, and revision/conflict internals are intentionally not published. Contact maintainers for an approved interface contract. A 200 response from a sync request should be interpreted according to its per-operation results, not assumed to mean every submitted change was accepted.

## Public website and feature feedback

| Method | Route | Purpose | Boundary |
|---|---|---|---|
| POST | /api/public/site-data | Retrieve public-site information | Public representation, not private tenant records |
| GET | /api/public/feature-requests | Read published feature feedback | Public read surface |
| POST | /api/v1/feature-requests | Submit a feature request | Authenticated application |
| POST | /api/v1/feature-requests/{id}/vote | Participate in the voting workflow | Authenticated application |

A public-site response is not a general export of customer, staff, order, cost, or private-note data.

## External integrations and provider callbacks

The deployed system has authenticated interface families for authorized uploads, email, and AI-related actions. Those capabilities are not anonymous utilities or general relays. Their existence does not guarantee a configured provider for every tenant.

Payment-terminal route families also exist, including a native/Android-oriented interface. These should not be presented as a supported public browser offline-card API.

An allowlisted webhook-dispatch surface exists for specific external providers. Callback authenticity is provider-specific. This public guide intentionally avoids a complete internal callback/function catalog or operational test payloads.

## Internal function dispatch

Business-function dispatch is used by the first-party application. Function names, adapter compatibility routes, and internal runtime addresses are implementation details rather than a public plugin contract. A business capability being present does not authorize arbitrary function invocation.

## Why the reference is selective

Publishing stable boundaries helps legitimate developers without exposing unrestricted administration, cryptographic internals, internal schema relationships, customer data, or commercial formulas. Additional API specifications can be published when they have an owner, an approved audience, and an explicit compatibility contract.
