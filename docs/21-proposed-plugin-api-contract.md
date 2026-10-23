# Read-Only Plugin Contract — Working Proposal

**Important:** The routes in this document are examples implemented only by a public fictional simulator. They are **not** Hubzam Works™ production APIs and must not be used to build live integrations.

## Example request

`GET /v0/gateway/catalog/products` using *fictional* simulator headers:

```http
GET /v0/gateway/catalog/products HTTP/1.1
Host: 127.0.0.1
X-Demo-Installation: demo-install-a
X-Demo-Tenant: demo-studio-a
```

Example 200 response:

```json
{"synthetic":true,"tenant_id":"demo-studio-a","data":[{"id":"a-100","name":"Fictional Clay Kit","price":10}]}
```

The demo headers are deliberately forgeable; **they are not authentication**. Never expose this mock service to the network, replace the headers with real credentials, or point it toward production.

## Denial examples

- 401: fictional installation context not provided.
- 403: installation revoked, tenant mismatch, or scope denied.
- 404: unsupported simulator endpoint.
- 405: unsupported write method.

## Requirements for any future real contract

The private platform would need authenticated short-lived, non-forgeable sessions; strict tenant and user binding; field-level filtering; stable API versioning; explicit business administrator consent; request quotas; structured error codes; audit logging; per-installation revocation; and an independently reviewed release process. This public document does not grant rights to operate on a real tenant.
