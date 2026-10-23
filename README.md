# Hubzam Works™ Developer Hub

**Understand the platform. Integrate responsibly. Contribute improvements.**

Hubzam Works™ is a browser-first business platform connecting sales, product catalogs, inventory, warehouse workflows, rentals, bookings, customer relationships, loyalty, and reporting. It runs on independently managed infrastructure and supports selected offline POS workflows.

This is the public documentation repository, not the application source repository. It explains responsibilities, interfaces, data boundaries, and observable behavior without publishing proprietary implementation, deployment recipes, or business formulas.

**Documentation baseline: October 21, 2026.** Descriptions reflect a targeted review of deployed components and route definitions. They are not an independent security audit, a certification, or an assertion that every integration is enabled for every business.

## Start here

| Guide | What you will learn |
|---|---|
| [Platform overview](docs/01-platform-overview.md) | Who the platform serves and how its modules connect |
| [Architecture and technology](docs/02-architecture-and-technology.md) | What each major system does and where responsibilities sit |
| [Business workflows](docs/03-business-workflows.md) | Sales, stock, warehouse, rental, booking, and loyalty lifecycles |
| [Security and trust](docs/04-security-and-trust.md) | Identity, authorization, tenant isolation, and payment boundaries |
| [Privacy and data handling](docs/05-privacy-and-data-handling.md) | Data categories, access expectations, local storage, and third parties |
| [Offline operation and synchronization](docs/06-offline-and-sync.md) | What local-first operation means, its boundaries, and reconciliation |
| [API overview](docs/07-api-overview.md) | Interface conventions, authentication, scope, and integration readiness |
| [API capability reference](docs/08-api-capability-reference.md) | Selected existing routes, access classifications, and protocol examples |
| [Integration lifecycle](docs/09-integrations-and-extensions.md) | External providers and how proposed integrations should be reviewed |
| [Assurance and documentation status](docs/10-assurance-and-status.md) | Verified observations, limitations, and future publication requirements |
| [Glossary](docs/11-glossary.md) | Common platform and technical terms |

## Public transparency with proprietary ownership

We publish explanations of platform behavior and interfaces so readers can evaluate the system and developers can discuss improvements. We retain private source code, schemas and migrations, operational access details, cryptographic secrets, anti-abuse configuration, and proprietary pricing and reconciliation internals.

Browser-delivered software is necessarily inspectable by its user. A public documentation policy does not make delivered JavaScript secret. Sensitive rules and secrets belong behind appropriate server-side boundaries; this repository does not distribute application source or grant a software license.

## API access is a separate approval

An endpoint being described here does **not** make it an unrestricted third-party API. Some routes exist for Hubzam's own browser application or approved provider callbacks. Do not scrape, automate production writes, or treat a normal user session as permission for a third-party integration. See the [API access model](docs/07-api-overview.md).

## Participate

- Use issues for documentation corrections and feature proposals containing fictional data.
- Submit documentation pull requests using the [contribution guide](CONTRIBUTING.md).
- Report vulnerabilities privately using [SECURITY.md](SECURITY.md).
- Read the [documentation rights notice](NOTICE.md) before redistributing material.

Hubzam Works™ is owned by Hubzam Enterprises, LLC. Product availability and permissions depend on the business, account, and deployed release.

## Community extension collaboration (proposed)

Want to build with other developers **without access to Hubzam Works™ private application code**? We are preparing an independent contribution workspace on this public repository. The proposed workflow includes standalone sample code, synthetic-data tests, public issue and pull-request templates, safe manifest-only validation, and a separate maintainer approval gate. **This is not yet a supported plugin SDK, runtime, marketplace, or deployment pipeline.**

- [Start with the community extension workspace](community-extensions/README.md)
- [Draft extension submission specification](docs/13-extension-specification.md)
- [Contributor review and catalog safeguards](docs/14-community-review-and-catalog.md)
- [Independently reviewed collaboration workflow](docs/12-independent-developer-contributions.md)

Contributors must never upload secrets, private code, production data, or unlicensed materials. Pull requests cannot deploy changes to Hubzam Works™.

## Local synthetic developer sandbox (proposed)

A [standalone localhost-only simulator](sandbox/README.md) and [sandbox blueprint](docs/15-developer-sandbox-blueprint.md) are under review. These examples provide fictional records and read-only example routes; they are **not** a supported Hubzam Works™ SDK, real API access, extension installer, or live environment. No proprietary code or private integration credentials are required.

## Future plugin platform safeguards (design proposal)

The Developer Hub includes proposed documents on the [private gateway and tenant-scoped permissions](docs/16-plugin-runtime-security-architecture.md), [independent contributor review and future marketplace policy](docs/17-plugin-contributor-approval-policy.md), and [plugin threat model](docs/18-plugin-threat-model.md). These designs do **not** create live integration permissions, an approved SDK, or an installable marketplace. External contributions cannot deploy themselves or access the private Hubzam Works™ repository.
