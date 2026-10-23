# Restricted Developer Demo — Implementation Plan

**Status: proposed, not provisioned.** The public synthetic sandbox in this repository does not provide actual Hubzam Works™ login credentials. No public developer should be given access to production business records or the private source repository.

## Goal
Allow an invited prospective collaborator to see the real product experience **in a separate, disposable demo tenant** with invented data, narrowly scoped permissions, and immediate revocation.

## Mandatory release gates before sending any login
1. **Separate environment or rigorously isolated demo tenant.** Do not reuse My Creation Haven™ or another actual company tenant. A staging installation is not automatically a safe demo: it may contain operational records, integrations or cross-company superadmin views.
2. **Synthetic data only.** Seed fictional businesses, staff, customers, receipts, products, bookings and reports. Never clone or anonymize actual business records into the demo.
3. **Dedicated least-privilege role.** Allow selected navigation and read-only exploration initially. Deny superadmin, platform operations, financial exports, business deletion, refunds, payments, API-key viewing, webhooks, plugin installation, user management, and access to other tenants.
4. **Deny external effects.** Turn off real email/SMS/calls, merchant payments, shipping label purchases, notifications, gift-card issuance, provider writes and blockchain transactions. Where useful, substitute clearly labeled mock responses.
5. **Backend authorization verification.** Test direct API access as well as menus. Explicitly test cross-tenant IDs and direct requests; UI-hidden buttons are not sufficient.
6. **Identity and expiration.** Issue a unique demo account, short-lived invitation, expiration/revocation process, and audit log. Do not share an administrator password.
7. **Network/server separation.** No SSH, VPS access, source checkout, privileged build/deploy capability, secrets, production domains or internal service addresses.
8. **Safe experimentation.** Allow edits only to disposable fixtures in an isolated playground after write permissions are independently verified. Reset/snapshot the sandbox between participants.
9. **Review and go/no-go.** Confirm account has no production access, all integrations are fake/disabled, tenant isolation tests pass, and an administrator has tested revocation. Record an explicit approval before invitations.

## Suggested user journey
- Request access → owner screens intent → owner provisions demo account → invite via private approved channel → collaborator explores → feedback via public GitHub Issues using only fictional screenshots and sanitized observations → automatic expiration → owner can revoke immediately.
- The owner may separately invite successful contributors to independent community projects. A demo login does not grant private GitHub repository or server access.

## Demonstration content
Show fictional POS transactions, sample product management, inventory movements, appointments/bookings, reports, and limited AI-coaching **examples**. Any AI capability must use a mock response or securely budgeted test credentials belonging solely to the demo tenant; never expose another tenant's API key. Show integrations only as nonoperational placeholders unless explicitly configured for test-only operation.

## Minimum test scenarios
- Demo role denied from superadmin pages and endpoints
- Demo tenant cannot read/write any real company data
- Cross-tenant identifier substitution returns 403/404 without sensitive disclosures
- Payments, shipping purchases, notifications, calls and external provider changes are disabled
- Demo user cannot read integration secrets or change role/permissions
- Account expiration and immediate revocation both work
- Reset cleans all demo changes, and no real audit/customer records are impacted
- Rate limiting and session timeout enforced
- Public screenshots and issue reports contain no personal data or internal configuration

## Launch status
This document is an implementation checklist only; **none of these gates are certified as passing by publication**. Keep invitations on hold until an authorized maintainer verifies them in the private development environment.
