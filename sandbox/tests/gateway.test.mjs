import test from "node:test";
import assert from "node:assert/strict";
import { createGatewaySimulator } from "../gateway.mjs";

test("fictional gateway scopes access, enforces grants and revocation", async () => {
  const gateway = createGatewaySimulator();
  const server = gateway.server;
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}/v0/gateway/catalog/products`;
  async function get(installation, tenant, method = "GET") {
    const headers = {};
    if (installation) headers["x-demo-installation"] = installation;
    if (tenant) headers["x-demo-tenant"] = tenant;
    return fetch(base, { method, headers });
  }
  try {
    assert.equal((await get(null, null)).status, 401);
    assert.equal((await get("demo-install-a", "demo-studio-b")).status, 403);
    assert.equal((await get("demo-install-b", "demo-studio-b")).status, 403);
    assert.equal((await get("demo-install-a", "demo-studio-a", "POST")).status, 405);
    const allowed = await get("demo-install-a", "demo-studio-a");
    assert.equal(allowed.status, 200);
    const payload = await allowed.json();
    assert.equal(payload.synthetic, true);
    assert.equal(payload.data[0].id, "a-100");
    assert.ok(!JSON.stringify(payload).includes("b-200"));
    assert.equal(gateway.revoke("demo-install-a"), true);
    assert.equal((await get("demo-install-a", "demo-studio-a")).status, 403);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
