/** Local-only synthetic extension simulator. Not Hubzam Works™ runtime or production API. */
import http from "node:http";
import { fileURLToPath } from "node:url";

const fixtures = Object.freeze({
  context: { company_id: "fictional-studio", company_name: "Example Creative Studio", sandbox: true },
  products: [
    { id: "demo-pottery", name: "Sample Pottery Painting", type: "service", price: 12.00, currency: "USD" },
    { id: "demo-art-kit", name: "Sample Art Kit", type: "good", price: 8.50, currency: "USD" }
  ]
});
const paths = new Map([
  ["/health", { status: "ok", kind: "public-synthetic-simulator" }],
  ["/v0/context", fixtures.context],
  ["/v0/catalog/products", { data: fixtures.products }]
]);
export function createSandboxServer() {
  return http.createServer((req, res) => {
    const send = (status, obj) => {
      res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
      res.end(JSON.stringify(obj));
    };
    if (req.method !== "GET") return send(405, { error: "Read-only simulator", code: "METHOD_NOT_ALLOWED" });
    const pathname = new URL(req.url ?? "/", "http://localhost").pathname;
    if (!paths.has(pathname)) return send(404, { error: "Unknown synthetic route", code: "NOT_FOUND" });
    return send(200, paths.get(pathname));
  });
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = Number(process.env.SANDBOX_PORT ?? 4177);
  if (!Number.isInteger(port) || port < 1024 || port > 65535) throw Error("Invalid sandbox port");
  const host = process.env.SANDBOX_HOST ?? "127.0.0.1";
  if (host !== "127.0.0.1" && host !== "::1") throw Error("Only loopback binding is allowed");
  createSandboxServer().listen(port, host, () => console.log(`Synthetic sandbox listening at http://${host}:${port}`));
}
