# Plugin Ecosystem Threat Model — Working Draft

**Status:** planning artifact, not certification or assurance of an existing system.

| Threat | Potential impact | Required mitigation |
|---|---|---|
| Malicious dependency or contributor | Supply-chain compromise | Isolated builds, code review, pinned dependencies, SBOM, signing, reproducible artifacts and vulnerability checks |
| Cross-tenant access | Exposure of another business's records | Tenant binding at every server request, row-level/field-level policies, adversarial multi-tenant tests |
| Overbroad permissions | Unauthorized sales or customer actions | Minimal capabilities, tenant consent, role checks and explicit denial of sensitive operations |
| Secret or credential exposure | Provider or platform compromise | Never disclose API keys/session tokens to plugins; private secret broker and audited provider interactions |
| Data exfiltration | Privacy, fraud or reputational harm | Field minimization, disclosed destinations, outbound restrictions where hosted, data contracts and monitoring |
| Service disruption | Checkout or POS unavailability | Request quotas, timeouts, circuit breakers, isolation, plugin-independent core workflows |
| Confused deputy | Plugin uses elevated administrator access | User+tenant+installation-bound sessions; evaluate authorization at gateway, not just at login |
| Compromised update | New version changes behavior | Immutable pinned digests, version-specific approval, staged rollout, rollback and kill switch |
| Fake marketplace endorsement | Customers trust unreviewed projects | Accurate independent status labels and explicit publisher verification |
| Public PR CI compromise | Secrets or network exploitation | No privileged workflows on untrusted PR code; read-only checkout; manual isolated code execution |

## Non-optional prelaunch tests

Check tenant A cannot see/modify tenant B; revoked sessions fail immediately; requests outside granted permissions fail closed; customer fields not allowed are redacted; update digest mismatch prevents installation; quota exhaustion does not break POS; repeated requests are bounded and audited; uninstall/revocation block further access.

Assign owners and evidence links to each mitigation during private engineering implementation. An item is **not verified** until implemented and tested.
