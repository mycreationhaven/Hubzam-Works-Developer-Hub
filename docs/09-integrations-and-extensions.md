# Integrations, extensions, and developer participation

[Back to the Developer Hub](../README.md) · [Contribution guide](../CONTRIBUTING.md)

## Integration boundaries

| Integration area | Responsibility | Publication status |
|---|---|---|
| Stripe-related payment capabilities | Provider-managed payment activity and business account relationships | Integration code and routes observed; tenant configuration and live processing require separate verification |
| Email delivery | Account and operational communication through the configured mail service | Mail relay service observed; delivery guarantees and provider policy are not established here |
| Arkovia identity | Optional challenge-based account authentication/linking | Route families observed; not payment authority |
| Uploaded media | Authorized image/file submission and subsequent presentation | An authenticated integration boundary exists |
| AI-related actions | Authorized requests to configured generation services | Routes observed; enabled models, costs, and data-processing terms require separate confirmation |
| Shipping/messaging/other providers | Optional business integrations | Handler presence alone does not establish an active supported service |
| Future plugin marketplace | A possible extension distribution and developer participation model | Direction under development, not a released sandbox or SDK contract |

External providers have their own availability, terms, security requirements, and supported capabilities. Hubzam Works cannot infer a provider's success simply from a browser action.

## Proposed integration lifecycle

1. Describe the business outcome and who needs it.
2. Identify the minimum information and operations required.
3. Agree on tenant scope, identity, permissions, and credential handling.
4. Obtain an approved interface contract and test environment where available.
5. Test with fictional records, including rejection, retry, outage, and conflicting-state scenarios.
6. Submit results and documentation for maintainer review.
7. Release only through the approved deployment process.

This describes the review expectations, not instructions for recreating or deploying Hubzam Works.

## Contributor access

This public repository supports documentation and proposals. Application implementation contributions require separate access and approval from Hubzam maintainers. A public issue or documentation pull request does not grant access to private repositories or production systems.

Changes should explain the problem, expected behavior, affected modules, permission implications, and verification performed. Maintainers retain review and release authority. Avoid submitting a large speculative rewrite when a narrow behavioral proposal will do.

## Extension security expectations

A future extension should not receive database credentials or an unrestricted platform session. Its required data and actions should be explicit. Tenant boundaries, secret handling, customer consent where applicable, failure isolation, and revocation should be part of review.

These are expectations for approving extensions, not a claim that a general-purpose plugin sandbox or scoped third-party token system has already shipped.

## Public demonstrations

Use fictional companies, synthetic customer accounts, fabricated transactions, and sample media for screenshots and demos. Clearly label simulations; do not imply that a mock payment or offline sync animation is a live transaction.

No demonstration should need a production database copy, staff PIN, payment credential, or private source repository. This baseline publishes explanatory documentation and protocol examples; it does not ship an interactive sandbox.
