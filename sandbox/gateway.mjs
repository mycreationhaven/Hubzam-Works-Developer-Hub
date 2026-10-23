/**
 * FICTIONAL authorization simulator only; never use as live authentication.
 * This code is deliberately not connected to Hubzam Works™ or its private APIs.
 */
import http from "node:http";

const tenants = Object.freeze({
  "demo-studio-a": [{ id: "a-100", name: "Fictional Clay Kit", price: 10 }],
  "demo-studio-b": [{ id: "b-200", name: "Fictional Drawing Pad", price: 7 }]
});
const installations = new Map([
  ["demo-install-a", {
    tenant: "demo-studio-a", plugin: "hello-community",
    status: "active", permissions: new Set(["catalog.products.read"])
  }],
  ["demo-install-b", {
    tenant: "demo-studio-b", plugin: "hello-community",
    status: "active", permissions: new Set([])
  }]
]);

function reply(res, code, body) {
  res.writeHead(code, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  });
  res.end(JSON.stringify(body));
}

export function createGatewaySimulator() {
  // Copy records per instance so revocation does not leak across tests.
  const grants = new Map([...installations].map(([id, value]) => [
    id, { ...value, permissions: new Set(value.permissions) }
  ]));
  return {
    revoke(id) {
      const found = grants.get(id);
      if (!found) return false;
      found.status = "revoked";
      return true;
    },
    server: http.createServer((req, res) => {
      if (req.method !== "GET") return reply(res, 405, { error: "Synthetic simulator is read-only" });
      const path = new URL(req.url ?? "/", "http://localhost").pathname;
      if (path === "/health") return reply(res, 200, { status: "ok", synthetic: true });
      if (path !== "/v0/gateway/catalog/products") return reply(res, 404, { error: "Unknown path" });
      // Deliberately fictional, non-secret identifiers, NOT production credentials or auth.
      const installationId = req.headers["x-demo-installation"];
      const tenantId = req.headers["x-demo-tenant"];
      if (typeof installationId !== "string" || typeof tenantId !== "string") {
        return reply(res, 401, { error: "Missing fictional installation context" });
      }
      const grant = grants.get(installationId);
      if (!grant || grant.status !== "active") return reply(res, 403, { error: "Installation not active" });
      if (grant.tenant !== tenantId) return reply(res, 403, { error: "Tenant mismatch" });
      if (!grant.permissions.has("catalog.products.read")) {
        return reply(res, 403, { error: "Illustrative capability not granted" });
      }
      return reply(res, 200, { synthetic: true, tenant_id: tenantId, data: tenants[tenantId] });
    })
  };
}
