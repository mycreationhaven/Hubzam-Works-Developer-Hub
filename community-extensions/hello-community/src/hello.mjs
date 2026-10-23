/** Standalone demonstration. No Hubzam APIs, dependencies, or network access. */
export function greet(displayName = "Developer") {
  const clean = String(displayName).trim().slice(0, 80) || "Developer";
  return `Welcome to the Hubzam Works™ Developer Hub, ${clean}!`;
}

if (process.argv[1]?.endsWith("/hello.mjs")) {
  console.log(greet("Sample Contributor"));
}
