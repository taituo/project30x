
# Softa 2025 – Deep Research Monorepo Program (Vision & Charter)

> Purpose: build a single **monorepo** that hosts 30+ projects (small → SaaS → enterprise), explore modern stacks hands‑on (Rust, TypeScript/JS, Python, GraphQL, RAG/finetuning, mobile, game dev, reactive UIs), and practice **Clean Code + CI/CD + Security** end‑to‑end. Use Vercel for app previews, a small self‑hosted VM for “real infra” experiments, and GitHub as the system of record. Augment the journey with **AI agents** (spec, scaffolding, tests, docs, security) while keeping human judgment in the loop.

---

## 1) Objectives & Outcomes

- **Ship breadth with depth.** Touch everything from tiny CLIs to multi‑service platforms, but for each item produce a **spec, a demo, and a short postmortem**.
- **Establish a reusable blueprint.** A monorepo scaffolding, CI pipelines, Helm/Terraform modules, and documentation patterns that you can reuse in any future project.
- **Practice AI‑augmented engineering.** Treat LLMs (Claude, Gemini, code‑specialized models) as assistants for ideation, refactoring, test generation, and docs—**never as the sole decision maker**.
- **Present & teach.** Create lightweight decks/demos so the repo doubles as a **portfolio and teaching resource**.

**Definition of Done (DoD) for each project:**
- `apps/<name>` with buildable code + unit/integration tests + basic docs.
- Clean Code standards satisfied (formatters/lints pass, types checked).
- Security & SBOM scans pass (Trivy/Semgrep/CycloneDX).
- Observability basics wired (OTel traces/logs/metrics for the main path).
- A short demo recorded as a markdown walkthrough + screenshots or a 3–5 min screencast link.
- ADR documenting 1–3 key decisions & trade‑offs.

---

## 2) Constraints & Platforms

- **Vercel app**: use it for Next.js frontends and quick preview links per PR.
- **Self‑hosted VM (resource‑limited)**: run **kind/k3d**, Postgres/Redis, and small services; keep quotas & resource requests modest.
- **GitHub**: issues, milestones, PRs, Actions, Packages (container registry). Optionally mirror pipelines to **GitLab CI** later.
- **AI assistants**: Claude, Gemini, and a code‑centric model. Use them deliberately (see §6) with prompt templates and guardrails.

---

## 3) Monorepo Architecture (quick recap)

```
softa-2025/
├─ apps/                  # each project lives here
│  ├─ api-rust/           # Rust (axum) examples
│  ├─ web-next/           # Next.js frontends
│  ├─ worker-python/      # FastAPI/workers, RAG/ETL
│  └─ mobile-expo/        # React Native
├─ packages/              # shared libs: ui, configs, proto/schema
├─ ai/                    # rag/, finetune/, evals/
├─ infra/                 # terraform/, helm/, pipelines/
├─ ops/                   # observability/, security/
├─ docs/                  # mkdocs/, adr/, research/, reports/
└─ .github/               # actions, templates
```

**Principles**
- **Single source of truth**: specs, code, infra, and docs live together.
- **Composable tooling**: Makefile targets + reusable CI jobs.
- **Everything observable**: simple OTel setup per service from day one.
- **Small PRs, fast feedback**: preview environments on each PR.

---

## 4) Program Workflow (repeatable loop)

1. **Problem framing (1–2h):** user stories, scope, constraints, success criteria.
2. **Design note (2–4h):** a 1–2‑page spec with architecture sketch, data model, API, risk list, and a 3‑step delivery plan.
3. **Spike (time‑boxed):** validate 1–2 riskiest unknowns.
4. **Scaffold:** generate baseline (CLI/HTTP/API/UI) with our monorepo templates.
5. **Implement:** tests first where practical; else, write a “test intent” note then backfill.
6. **Review:** manual test charter + code reading (line‑by‑line for the core).
7. **Demo & doc:** record a short walkthrough; update ADR & README.
8. **Retro:** note learnings, TODOs, and refactors; tag issues for later weeks.

**Specification template (tl;dr)**
- *Context*: why now? who benefits? constraints?
- *Requirements*: must/should/won’t + performance SLO.
- *Design*: sequence diagrams, schema, API surface (OpenAPI/SDL), data life‑cycle.
- *Risks*: security, consistency, cost, lock‑in, team skill.
- *Plan*: MVP → polish → stretch; exit criteria for each step.

---

## 5) Testing & Code Reading Rituals

- **Unit & integration first** for core logic. Use *property‑based tests* (e.g., `proptest` in Rust) and fuzzers where it pays off.
- **Manual test charters**: write 5–10 exploratory charters per project (edge cases, failure injection, latency under load).
- **e2e tests**: Playwright for web flows; k6/Locust for basic load; contract tests for APIs.
- **Code reading**: choose one “spine” file per project; read line‑by‑line and annotate insights in `docs/research/<project>-reading.md`.
- **Coverage isn’t the goal**—risk‑driven tests are. Track escaped defects & fix time.

---

## 6) AI‑Augmented Engineering (agentic angle)

Treat AI tools as **agents with clear roles** and measurable outputs. Keep **human review mandatory** before merging.

**Agent roster (suggested):**
- **Spec Agent**: drafts the problem statement, constraints, acceptance tests. Output → PR to `docs/specs/`.
- **Scaffolder Agent**: creates initial project skeleton using our templates. Output → PR to `apps/<name>`.
- **Testwright Agent**: proposes unit/integration/e2e tests and property/fuzz targets.
- **Refactorer Agent**: suggests cleanups, names, abstractions, dead‑code removals.
- **Security Sentry**: reads diffs for common vulns (SQLi, SSRF, auth bugs), enforces dependency policy.
- **Infra Orchestrator**: edits Helm/Terraform modules and keeps overlays consistent.
- **Doc & Deck Agent**: turns README + screenshots into a **Marp** or **reveal.js** deck for each demo.

**Guardrails & evidence:**
- Agents write to branches and PRs only; **no direct pushes**.
- Each agent PR must include: goal, assumptions, prompts used, confidence notes, and a small **eval** (lint/tests/bench) run result.
- Log prompts/responses that are safe to store in `docs/research/agent-logs/`.

---

## 7) Presentations & Knowledge Sharing

- **MkDocs** site as the living handbook (`docs/mkdocs/`).  
- **Marp** decks (`docs/slides/`) to render talks per project (problem → design → demo → lessons).  
- **Weekly report** (`docs/reports/week-XX.md`): shipped items, risks, next focus, metrics snapshot.  
- **Architecture gallery**: keep PNG/SVG diagrams in `docs/diagrams/` and embed in specs.

---

## 8) CI/CD, Security & Ops (working rules)

- **Pipelines**: build → lint → test → security (Trivy/Semgrep) → SBOM (CycloneDX) → image build → `cosign` sign → deploy‑to‑dev (kind/k3d) → e2e → promote.  
- **Preview per PR**: Vercel for frontends; ephemeral namespace for services on the VM/kind cluster.  
- **Secrets**: SOPS + age in repo; External Secrets in cluster; least‑privileged IAM.  
- **Observability**: OTel exporters on by default, dashboards in Grafana; alerting via simple SLOs (latency, error rate).  
- **Cost & resource guards**: explicit CPU/memory requests/limits, delete ephemeral envs nightly.

---

## 9) Learning Path & Metrics

- **Skill threads**:  
  - *Rust*: async, ownership patterns, axum/tower, property testing, perf & profiling.  
  - *TypeScript/React*: server components, tRPC/GraphQL, accessibility, Playwright.  
  - *Python*: FastAPI, RAG pipelines, data contracts, typing & pydantic.  
  - *Infra*: Helm/Kustomize, Terraform, GitOps, OTel, incident drills.  
  - *AI*: retrieval quality, evaluation, fine‑tuning (LoRA/PEFT), prompt design.
- **Metrics** (lightweight): PR lead time, flaky test count, escaped defects, and two business‑ish KPIs per SaaS demo.  
- **Cadence**: weekly demo + retro; monthly “hardening week” for refactors and docs.

---

## 10) Additional Candidate Projects (beyond the original 30)

1. **CRDT Collaborative Notes** (Yjs/Automerge in UI, Rust or Python sync server).  
2. **Event‑Sourced Ledger** (CQRS with Kafka/NATS, projections into Postgres/ClickHouse).  
3. **eBPF Observability Agent** (collect basic network metrics; expose a Rust/TS UI).  
4. **Edge Inference Microservice** (WASM + ONNX Runtime; run tiny models at the edge).  
5. **Bevy Game Prototype** (Rust ECS; simple physics + UI; deploy desktop & web via WASM).  
6. **IoT Telemetry Ingest** (MQTT broker, time‑series storage, live dashboards).  
7. **Data Governance Mini‑Portal** (schemas, contracts, breaking‑change checks in CI).  
8. **Synthetic Data Generator** (privacy‑preserving datasets for dev/testing).  
9. **SLO Calculator** (ingest SLIs, compute error budgets, suggest throttling).  
10. **Priority Job Scheduler** (work queues, backoff, dead‑lettering, observability).  
11. **Vector ETL** (doc ingestion → chunking → embeddings → Qdrant/pgvector; monitors for drift).  
12. **Lightweight Secrets Broker** (envelope encryption, short‑lived tokens, audit log).

Each of these mirrors the program’s DoD and agent workflow.

---

## 11) Kickoff Week (concrete checklist)

- **Day 1**
  - Create the monorepo with `apps/`, `packages/`, `infra/`, `ops/`, `docs/` skeletons.
  - Add editorconfig, pre‑commit, lint configs (Rust/TS/Python), PR/issue templates.
  - Provision Vercel project for `apps/web-next`; set up preview domains.
- **Day 2**
  - Bring up **kind/k3d** on the VM, install Helm, cert‑manager (dev), Postgres, Redis.
  - Bootstrap Grafana + Prometheus + Loki + Tempo; wire OTel collector.
- **Day 3**
  - Wire **GitHub Actions** reusable workflows (build/lint/test/security/SBOM/image/sign/deploy).
  - Push a sample “hello‑service” through the full pipeline.
- **Day 4**
  - Stand up **Feature Flag Service** (SaaS #11) skeleton; document design and risks.
  - Add Playwright e2e for one happy path; publish Vercel preview.
- **Day 5**
  - Run the first weekly demo; log outcomes and create “next week” issues.
  - Write ADRs for decisions made; tag TODOs for hardening week.

---

## 12) Issue Taxonomy & Milestones (how to execute at scale)

- **Labels**: `spec`, `spike`, `good-first`, `infra`, `security`, `performance`, `observability`, `ai-agent`, `docs`, `help-wanted`.
- **Milestones**: *Repo & CI*, *Core Apps*, *Infra & Obs*, *Security*, *AI & RAG*, *SaaS Demos*, *Enterprise Demos*, *Hardening & Docs*.
- **Templates**: bug/feature templates prompt for acceptance criteria, risks, observability hooks, and rollback plan.

---

## 13) Quality Bar (merge gate)

- All linters/formatters passing; types clean.  
- Unit/integration tests green; flaky tests quarantined.  
- Security scans & SBOM generated; license policy OK.  
- OTel metrics/logs/trace present for the main user journey.  
- README includes **how to run**, **how to test**, **how to observe**, and **known limits**.  
- Demo notes or short screencast attached.

---

**You’re set.** This charter gives you the narrative, the guardrails, and the concrete steps to start building **today**. Add this file to `docs/` as the front‑page of your research program and iterate weekly.
