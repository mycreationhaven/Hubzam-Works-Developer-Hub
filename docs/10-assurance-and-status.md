# Assurance, evidence, and documentation status

[Back to the Developer Hub](../README.md)

## Baseline and evidence

This public baseline was prepared on **October 21, 2026** using a targeted review of deployed dependency declarations, active service names, application route definitions, selected authentication and tenant-access paths, and module presence.

Private inspection evidence is not included because it can contain implementation details and operational identifiers. The public statements below identify the limits of that review rather than implying a complete audit.

| Statement | Evidence class | Limit |
|---|---|---|
| Core UI uses React, Vite, and supporting UI/data libraries | Dependency declarations | Packages alone do not prove every capability is active |
| Main API uses Node.js/Hono and a separate Deno runtime | Deployed configuration and service inspection | No capacity, failover, or performance guarantee inferred |
| PostgreSQL is a central data service | Running service and application integration | No complete data-integrity audit performed |
| Offline persistence uses browser storage and a sync layer | Deployed dependencies/module inspection and documented architecture | No claim of universal browser support or offline feature parity |
| Authentication checks account/session state | Selected implementation review | Not an audit of every privileged route |
| Tenant-scoped read routes use enabled-entity and access checks | Selected route review | Does not certify every business function |
| Described API route families exist | Route definition inspection | Reachability is not external integration approval |
| Stripe/email/other integrations have implementation boundaries | Packages, routes, services, and module presence | End-to-end provider behavior not comprehensively tested |

## Status vocabulary

- **Observed:** a deployed component or route was present in the targeted review.
- **Workflow description:** an explanation of business responsibilities and intended state distinctions.
- **Integration requirement:** a condition external developers must meet before relying on a capability.
- **Future direction:** a proposal, not a shipping promise.
- **Not established:** no supporting evidence was sufficient for a public assurance claim.

## Limits worth understanding

No independent penetration test, formal compliance certification, full backup-restore exercise, provider-wide live transaction test, recovery-time objective, or uptime SLA is asserted by this publication.

No universal guarantee of encryption at rest, end-to-end encryption, MFA, browser storage durability, immediate offline revocation, exactly-once processing, or automatic conflict resolution is made.

This is not a list of confirmed vulnerabilities. It is a statement of which assurances this documentation can and cannot substantiate.

## Future documentation milestones

The following are publication goals requiring maintainer approval, not dated delivery commitments:

| Milestone | Evidence needed before publication |
|---|---|
| Supported third-party API specification | Approved routes, authentication contract, schemas, compatibility and error behavior |
| Integration sandbox | Isolated environment and synthetic fixtures |
| Security assurance update | Defined review scope, results, remediation verification, and safe public summary |
| Privacy operations reference | Approved policies for retention, exports, deletion, subprocessors, and residency |
| Recovery and reliability statement | Tested backup/restore process and supportable service commitments |
| Extension developer program | Permission model, packaging/review process, isolation, and revocation behavior |

## Keeping this repository accurate

A change to a screen is not necessarily an API change, and a newly present handler is not automatically a public integration. Documentation changes should identify whether the behavior was observed, agreed as a contract, or proposed.

See [CHANGELOG.md](../CHANGELOG.md) for documentation releases. This repository's changelog is not the application's complete historical release log.
