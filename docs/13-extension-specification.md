# Community Extension Submission Specification (Draft)

**Proposal only:** This schema is for reviewing community-created projects, not an executable Hubzam Works™ plugin interface. No SDK, execution environment, API scopes, or installation mechanism is currently promised.

## Extension submissions
Place each independent project under `community-extensions/<slug>/`. Include `README.md`, `extension.json`, an explicit `LICENSE`, source, and tests. Supply only self-created or properly licensed code; never copy the private product's code, customer data, credentials, internal URLs, or proprietary formulas.

A manifest must contain:
- `schema_version`: `"0.1-proposal"`
- `id`: lowercase letters, numbers and hyphens, beginning with a letter; no leading/trailing hyphen
- `name`: short human-readable title
- `version`: semantic version `MAJOR.MINOR.PATCH`
- `description`: purpose in plain English
- `author`: attribution
- `license`: SPDX license identifier where applicable
- `permissions_requested`: array of human-readable proposed permissions; **never automatically granted**
- `external_services`: array of service names and descriptions
- `data_handling`: description of information handled, stored, transmitted or retained
- `entrypoint`: relative path within the extension directory to an independent demonstration entrypoint, **not** a path executed by Hubzam Works™

All entries are reviewed as untrusted source. Manifest validation is a formatting gate, not a security review, code-signing system, sandbox, or authorization.

## Future runtime requirements
Before any plugin can run within the actual product: define stable authenticated extension interfaces; independent tenant-scoped installation consent; least-privilege capabilities; server-side enforcement; isolated execution and filesystem/network limits; rate and resource quotas; safe outbound network policy; audit trails; revocation; rollback; dependency provenance and signature verification; version compatibility; and safe update/uninstall flows. No submission may require administrator credentials, database connections, or direct server access.

## Licensing and compensation
Accepted repository PRs do not automatically become marketplace products or entitle the contributor to payment. Future paid developer participation requires a separately accepted agreement, license review, financial eligibility verification and platform approval. Customer-facing plugins are intended to be included without per-plugin charges, subject to a future approved marketplace policy.
