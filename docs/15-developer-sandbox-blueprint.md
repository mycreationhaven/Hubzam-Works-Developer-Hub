# Independent Developer Sandbox Blueprint

**Design proposal, not a live environment or public API.** This document defines an initial sandbox that can be developed without giving contributors access to the proprietary Hubzam Works™ application, databases, production credentials, or deployment pipelines.

## Goals

1. Let contributors build and test standalone extensions against a **documented simulator**, not the private Hubzam Works™ runtime.
2. Publish synthetic sample data and a narrowly scoped reference interface.
3. Maintain a separate product integration review and explicit approval gate.
4. Never automatically copy, install, or execute public repository submissions inside Hubzam Works™.

## First sandbox release

Implement a local, dependency-free mock server bound to `127.0.0.1` by default. It provides fictional companies, sample products, and read-only example workflows. The mock is intentionally not connected to Hubzam Works™ and is **not** a compatibility guarantee for the platform's private endpoints.

The starter server offers:

| Mock route | Response | Permissions |
|---|---|---|
| `GET /health` | Local simulator status | None |
| `GET /v0/catalog/products` | Fictional product list | Simulator only |
| `GET /v0/context` | Fictional tenant context | Simulator only |

All other routes return 404; all non-GET requests return 405. No data writes, real authentication, tokens, internal endpoints, payments, business records, cross-tenant access, or network callbacks. Simulator permissions never authorize live product API access.

## Future design (not yet implemented)

- Stable, separately versioned extension API with tenant-bound OAuth/capability grants
- Per-installation permission consent and strict server-side authorization
- Tenant scoped read/write endpoints with field allowlists
- A separately isolated hosted test environment containing **only synthetic records**
- CPU/memory/runtime quotas, outbound network restrictions, and immutable signed release packages
- Maintainer-reviewed integration adapters, opt-in installations, version pinning, monitoring, rollback and revocation

Public extension manifests are descriptive submissions until those controls exist.

## Adoption gate

Contributor PR → public static checks → human review → separately authorized adapter implementation → controlled internal security testing → explicit platform approval → later marketplace eligibility. Neither public PR approval nor simulator success installs anything.

## Next validation tasks

- Review interface names and data shape with the private engineering team without publishing confidential code.
- Test localhost binding, offline mode, deterministic responses, error handling and concurrency limits.
- Review dependency licensing and sanitize example fixtures.
- Define the marketplace review, compensation and licensing agreements separately.

See [submission specification](13-extension-specification.md) and [review policy](14-community-review-and-catalog.md).
