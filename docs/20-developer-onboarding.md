# Community Developer Onboarding — Proposed Guide

Welcome! Hubzam Works™ is privately developed, and this public repository supports **independent contributions** without granting access to the private codebase or company infrastructure.

## First contribution

1. Read [CONTRIBUTING.md](../CONTRIBUTING.md), [SECURITY.md](../SECURITY.md), and the [draft extension specification](13-extension-specification.md).
2. Browse the public repository and open a GitHub issue describing a standalone project or improvement. Avoid secrets and customer data.
3. Fork this **public** repository to your own GitHub account. Do not request private source access.
4. Develop locally using synthetic fixtures in `sandbox/`. The sandbox is a simulator, **not** the real Hubzam Works™ API.
5. Submit a pull request with a description, tests, dependencies, license, data-handling disclosures, and requested permissions.
6. Wait for maintainer review. Approval of code in this repository never authorizes installation, access to live company data, or deployment.

## Good starter projects

- Add read-only fictional inventory summary examples and tests to the simulator.
- Build a small independent dashboard that uses *synthetic* catalog responses.
- Create accessible sample UI components driven by fictional business records.
- Improve documentation, tests, and validation for community extension submissions.

## Collaboration expectations

Be welcoming to beginners and experienced developers alike. Discuss design decisions publicly without disclosing private implementation details. Contributors retain control of their forks; maintainers decide what enters this public repository. There are no guaranteed payments, roles, public API credentials, or access to private repositories.

## What to avoid

Never post real customer exports, keys, private source, provider integrations, actual server details, or private security findings. Report vulnerabilities privately under [SECURITY.md](../SECURITY.md). Do not execute community-supplied scripts with sensitive credentials or privileged access.
