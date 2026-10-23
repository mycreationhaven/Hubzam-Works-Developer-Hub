# Community Review & Catalog (Draft)

## Submission status
`proposed` → `under_review` → `repository_accepted` or `rejected`.

**Repository accepted** means only that maintainers accepted the public files. It does not mean `runtime_approved`, `security_certified`, `marketplace_listed`, or `deployed`. Those are separate controls yet to be developed.

## Review checklist
1. Verify author rights, explicit license, copyright notices and dependency licenses.
2. Verify no secrets, private source, live data, private endpoints or internal configuration.
3. Inspect all executable code, install scripts and transitive dependencies for risky behavior.
4. Confirm synthetic fixtures, repeatable tests, accessibility and clear error handling.
5. Confirm request for only necessary permissions, safe tenant isolation plan, external connections and data retention disclosures.
6. Perform static checks without running untrusted code with credentials or access to infrastructure.
7. Require maintainer approval. Keep product integration and deployment decisions in separate private review.

## Public catalog
A public index may record submissions and their **repository-review status**. It must never imply Hubzam Works™ runtime compatibility, security certification, platform endorsement or installation availability without separate verification. Keep author attribution and links to a repository file. Do not automatically publish a submission from a PR into a customer-facing marketplace.

## Proposed community paths
- Bug reports and ideas: GitHub Issues (sanitize sensitive data)
- Submission: contributor fork → PR → independent review
- Documentation: public README, guides and examples
- Community support: Issues/Discussions if enabled; rules prohibit soliciting credentials, private access, harassment, and customer-data sharing
- Future developer compensation: separate voluntary agreement, ownership/license checks and approval outside GitHub submissions
