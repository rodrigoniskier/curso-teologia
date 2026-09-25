# Security Policy

Security fixes are applied to the current `main` branch.

## Content and client-side security

Sola Scriptura is a content-heavy client-side application. Treat curriculum data, Markdown-like content and external metadata as untrusted input during development.

- Do not inject authored content through raw HTML.
- Keep generated/catalog files reproducible from versioned sources.
- Keep secrets and private credentials out of the frontend bundle.
- Review external links and metadata through the existing audit pipeline.
- Use synthetic data for demonstrations when adding interactive user features.

## Reporting

Report vulnerabilities privately through GitHub Security Advisories / Private Vulnerability Reporting when available. Do not publish working exploit payloads in public issues.
