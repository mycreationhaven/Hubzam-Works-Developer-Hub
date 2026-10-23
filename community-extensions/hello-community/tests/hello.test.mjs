import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/hello.mjs";

test("greets synthetic name", () => {
  assert.equal(greet("Sample"), "Welcome to the Hubzam Works™ Developer Hub, Sample!");
});
test("handles blank input", () => {
  assert.equal(greet(" "), "Welcome to the Hubzam Works™ Developer Hub, Developer!");
});
