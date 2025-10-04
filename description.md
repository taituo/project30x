# Project30x Program Description

## Overview
Project30x is a coordinated effort to transform thirty seed-stage concepts into production-ready products. It unifies specifications, governance, and delivery plans under a docs-as-code workflow so that architecture, implementation, and operations remain aligned.

## Research and Strategy
The program explores validated technology stacks through deep research sprints that feed directly into delivery tracks. Architecture decision records, platform guardrails, and shared research logs ensure discoveries are captured once and reused everywhere.

## Delivery Surfaces
Project30x targets multiple deployment contexts:

- **SaaS** platforms with multi-tenant billing, identity, and observability baselines.
- **Kubernetes** workloads showcasing GitOps, platform engineering, and cross-cloud topologies.
- **Local developer** tooling such as CLI utilities, testing harnesses, and automation pipelines.
- **Mobile** and **responsive web** experiences that extend flagship capabilities to end users.

## Operating Model
Every project progresses through three phases (MVP, polish, stretch) with quality gates covering testing, security, and observability. Shared CI/CD workflows, feature templates, and compliance pipelines keep delivery consistent across teams.

## Knowledge Base
The Docusaurus site in `docs/` houses the golden path guides, platform references, project consensus dossier, and research entries. Each application now owns its specification within `apps/<project>/docs/`, and the site ingests them via a secondary docs plugin so code and documentation stay side by side.

## Next Steps
1. Prioritise the highest-impact blueprints from the consensus specification.
2. Stand up the shared build pipeline and observability stack for early adopters.
3. Continue refining documentation as implementation uncovers new insights.
