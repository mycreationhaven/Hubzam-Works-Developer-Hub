# Public Developer Sandbox Simulator

This is a **standalone local simulator**, not Hubzam Works™ software, an official integration SDK, or a real plugin runtime. It contains fictional sample information only and has no access to private application code, customer records, or credentials.

Requires Node.js 20+; no installation of third-party packages.

```bash
node sandbox/server.mjs
```

The simulator listens on **127.0.0.1:4177** by default and exposes:

- `GET http://127.0.0.1:4177/health`
- `GET http://127.0.0.1:4177/v0/context`
- `GET http://127.0.0.1:4177/v0/catalog/products`

Run local tests with `node --test sandbox/tests/*.test.mjs`. The simulator refuses non-loopback bind hosts; do not expose it to the internet. Request and output sizes are bounded; requests are read-only. There is no real API authorization in this fictional test tool, so never send customer information or live credentials.
