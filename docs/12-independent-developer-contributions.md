# Independent Developer Contributions (Proposal)

> **Status: proposed contribution workflow.** This document is not an announcement of a live plugin runtime, an approved SDK, a public production API, or an open-source license for Hubzam Works™.

## Purpose

Developers can collaborate on independently written plugins, add-ons, integrations, design components, data import/export tools, accessibility tools, documentation, and test fixtures without receiving access to the proprietary Hubzam Works™ application repository, servers, customer records, or credentials.

**Separate submission from adoption:** merging a contributor's work into this public repository does not install it in Hubzam Works™, grant it privileges, publish it in a marketplace, or authorize deployment.

## Contributor path

1. Review the [contribution rules](../CONTRIBUTING.md) and public [API overview](07-api-overview.md).
2. Open an issue proposing an extension, describing its user benefit, permissions/data needs, and how it can function using public interfaces. Do not post secrets or private source.
3. The maintainer scopes the proposal. An unapproved concept may still be discussed, but it must not claim to be officially supported.
4. Fork **this public Developer Hub only**. Implement independent code in a dedicated folder under `community-extensions/<slug>/`; use self-contained tests and synthetic fixtures.
5. Submit a pull request from the contributor's fork. Explain behavior, licensing, dependencies, third-party services, requested permissions, and security considerations. Contributors keep their own fork permissions; they do not need write access to the Hub.
6. Maintainers inspect code, dependency provenance, licenses, and supply-chain risks; run approved tests in an isolated nonprivileged environment; and choose to reject, request changes, or merge.
7. **Separate product approval:** after repository acceptance, Hubzam maintainers may choose to privately implement a compatible adapter or separately approve a package for a future extension catalog. Only maintainers with authorized access may deploy to Stage or production.

## Security boundaries

- No contributor access to the private core repository, database, VPS, production environment, or internal CI/CD.
- No reusable production/test credentials, cross-tenant tokens, customer data, private build files, proprietary implementation, or undocumented internal endpoints in submissions.
- No automatic public-repo-to-private-repo synchronization, deployment hooks, privileged CI, or automatic plugin installation.
- Treat all third-party code, README instructions, build scripts, dependencies, and generated artifacts as untrusted until reviewed. Never run forked PR code on Hubzam infrastructure with secrets or network access to internal services.
- Prefer GitHub-hosted disposable runners and read-only tokens for safe static checks. Do not use `pull_request_target` to check out or execute untrusted pull-request code.
- The platform's eventual plugin runtime must enforce per-tenant permission grants, scoped APIs, server-side authorization, resource quotas, signature/integrity checks, auditing, sandboxing, and revocation. A manifest is a declaration, **not** an enforcement mechanism.
- Security reports go through [SECURITY.md](../SECURITY.md), not public issues.

## Submission layout (illustrative)

```text
community-extensions/
  example-extension/
    README.md
    extension-manifest.example.json
    LICENSE
    src/
    tests/
```

Names and fields are intentionally examples, not a currently supported installation format. Developers should not assume that submitted code will run inside Hubzam Works™.

## Review and intellectual property

Contributors must have rights to the code and assets they submit, list their dependencies, and supply a compatible explicit license for their independent contribution. Do not copy private Hubzam Works™ code or other proprietary materials. A contribution grant/license does not transfer ownership of the Hubzam Works™ platform; a public repository also does not grant a license to its private implementation. Maintain a clear record of authorship and any extra commercial licensing needed before distributing an extension with Hubzam Works™.

## Repository protection checklist (owner action)

Before inviting contributors, configure repository rules for `main`: require pull requests and reviews, dismiss stale approvals, restrict direct pushes where supported, disable force-push and branch deletion, require conversation resolution, and require safe passing checks once those checks exist. Review bypass/administrator settings explicitly. Use CODEOWNERS as an extra review signal, not as the only barrier. **Settings must be verified in GitHub**; merely publishing this checklist does not enable protection.

Contributor code accepted to this repository is **not** automatically a marketplace listing. The marketplace, runtime API and compensation terms require separately reviewed agreements and implementation.
