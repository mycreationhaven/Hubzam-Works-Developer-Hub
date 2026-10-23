# Developer Demo Feedback Workflow — Proposal

This is an optional onboarding pathway, not a promise of a live demo account.

## What to ask a prospective contributor
- Which parts of the interface were intuitive or confusing?
- Which business workflow could be made faster, safer or easier?
- What independent plugin would you like to build first using only the public synthetic sandbox?
- What documentation or sample data would make collaboration easier?

## Report feedback safely
File a public GitHub issue only when all screenshots and steps are based on **invented demo data** and reveal no endpoints carrying tokens, real user names, customer data, private URLs, secrets or internal infrastructure. Security findings must follow [SECURITY.md](../SECURITY.md) privately.

## Initial contributor assignment
**Sample inventory dashboard**: independent browser UI reading synthetic product data from the public simulator, displaying product name and sample price, with loading, empty and error states, keyboard-accessible controls, and unit tests. No private APIs, paid services, or access to private application source. Submit through a fork and pull request. Acceptance requires readable docs, explicit license, no secrets or external data and independently repeatable tests.

## Owner check
Do not share demo credentials until the [restricted demo checklist](22-restricted-developer-demo.md) has passed. First-time collaborators can contribute documentation and sandbox code without needing any Hubzam Works™ login.
