# Tenant-Scoped Gateway Simulator (Prototype Only)

This is a **fictional teaching and test example**, not Hubzam Works™ production authentication or authorization. Its `x-demo-installation` and `x-demo-tenant` headers are **public, forgeable examples**. They must never be used as credentials or treated as proof of identity. The simulator must not be connected to real customer data, a network-accessible server, Hubzam Works™ private endpoints, or payment operations.

## Example behavior
The standalone `sandbox/gateway.mjs` exports `createGatewaySimulator()`. Tests start an HTTP server on localhost with temporary ports. It demonstrates:
- a synthetic installation that may read fictional tenant A products,
- a tenant mismatch that must be denied,
- a synthetic installation missing a requested permission that must be denied,
- missing identifiers that must be denied,
- revocation that takes effect on the next request,
- refusal of modifying HTTP methods.

Run `node --test sandbox/tests/gateway.test.mjs` using Node.js 20+.

## What real Hubzam Works™ would additionally require
- Authenticated, signed and short-lived sessions protected against forgery and replay;
- Backend-verified tenant, user identity, role and installation identity;
- Permission grants stored transactionally with auditable version changes;
- Server-side row and field restrictions, quotas, request validation and abuse detection;
- A verified package release digest and secure extension isolation boundary;
- Confidentiality, retention, and external-data-sharing controls;
- Separate privileged deployment and emergency revocation workflows;
- Adversarial security testing before any public runtime API is released.

**No functionality in this repository grants access to a live platform tenant.** This prototype is intentionally independent of the original local sandbox server and does not change private application code.
