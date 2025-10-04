# Project30x – Softa 2025 Knowledge Hub

## Vision
Project30x is the unifying documentation and specification workspace for the Softa 2025 program. The goal is to take thirty greenfield ideas from rough, "dirty" inception to well-governed, production-ready solutions built on validated technology stacks. Every project is documented, reviewed, and improved through a docs-as-code workflow that keeps knowledge, architecture, and delivery plans in lockstep.

## Scope in Numbers
- **30 reference implementations** spanning CLI utilities, SaaS platforms, and enterprise-grade systems.
- **Full lifecycle coverage** from discovery notes to ADRs, delivery roadmaps, and observability standards.
- **Ecosystem reach** across SaaS deployments, Kubernetes clusters, local developer environments, mobile experiences, and responsive web properties.
- **Shared governance** ensuring consistent security, CI/CD, research, and operating models for every team.

## Repository Layout
- `docs-website/` – Docusaurus site containing program guides, platform standards, project overviews, and the consolidated `projects-consensus` dossier.
- `apps/` – Reserved directories for each project’s future implementation footprint.
- `help/projects/` – Original in-depth project specs preserved alongside the published consensus view.
- `questions.md` – Open questions and next-step prompts captured during discovery.

## How We Deliver
1. **Docs-as-code pipeline** – All specs, ADRs, and playbooks live in Git, reviewed via pull requests, and published through automated builds.
2. **Validated tech stacks** – Each project blueprint references proven frameworks (Rust, TypeScript/Next.js, Python/FastAPI, Terraform, Keycloak, Temporal, etc.) mapped to appropriate deployment targets.
3. **Deployment fabrics** – Blueprints detail how solutions land in SaaS environments, Kubernetes workloads, local developer setups, mobile clients, and responsive front-ends.
4. **Observability-first mindset** – Monitoring, alerting, and quality gates are defined up front and embedded in every delivery phase.

## Navigating the Knowledge Base
- Start with `docs-website/docs/golden-path/intro.md` for the program charter and operating principles.
- Review `docs-website/docs/projects/overview.md` for a lightweight catalogue of all initiatives.
- Dive into `docs-website/docs/projects/consensus.md` to see every project’s consolidated objectives, architecture, risks, and delivery plan.
- Consult `docs-website/docs/platform/overview.md` and `docs-website/docs/architecture/adr/adr-process.md` for reusable platform capabilities and decision workflows.

## Getting Ready for Delivery
1. Clone the repository and install Node dependencies under `docs-website/` to run the Docusaurus site locally.
2. Use the consensus specs to select priority projects, then branch into the matching directory under `apps/` for implementation work.
3. Capture new insights as ADRs or research notes, keeping the knowledge hub authoritative and current.

## Call to Action
Project30x thrives when every contributor keeps documentation, architecture, and implementation aligned. Treat every change as an opportunity to tighten the connection between specs and code, uphold the common governance model, and deliver production-ready outcomes across cloud, edge, and client form factors.
