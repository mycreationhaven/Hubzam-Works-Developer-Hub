import test from "node:test";
import assert from "node:assert/strict";
import { createSandboxServer } from "../server.mjs";

test("simulator is read-only, fictional, and independent", async () => {
  const server = createSandboxServer();
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;
  try {
    const url = `http://127.0.0.1:${port}`;
    const context = await fetch(url + "/v0/context");
    assert.equal(context.status, 200);
    assert.equal((await context.json()).sandbox, true);
    const products = await fetch(url + "/v0/catalog/products");
    assert.equal(products.status, 200);
    assert.equal((await products.json()).data.length, 2);
    assert.equal((await fetch(url + "/v0/catalog/products", { method: "POST" })).status, 405);
    assert.equal((await fetch(url + "/unknown")).status, 404);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
