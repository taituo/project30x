Strategic Plan: Project30x Unified Knowledge Hub

Part I: Architectural Foundation – Building a Unified Knowledge Hub
This foundational section frames the Docusaurus site not merely as a documentation tool, but as a strategic asset for knowledge management and developer experience within a complex monorepo.

### 1.1 The Monorepo Challenge: Controlling Complexity at Scale

Modern software delivery—especially in large, multi-team environments—faces serious hurdles. Project30x operates roughly 30 initiatives spanning lightweight utilities, SaaS products, and enterprise platforms, all maintained inside a single monorepo with diverse technology stacks. While the approach unlocks code sharing and common tooling, it also introduces friction that must be addressed deliberately.

Key pain points include:

- **Information silos:** Without guardrails, knowledge remains trapped inside individual project teams and best practices fail to propagate.
- **Inconsistent standards:** Each project drifts toward its own interpretation of architecture, testing, and coding guidelines, increasing maintenance cost and hindering cross-team collaboration.
- **High cognitive load:** New contributors expend significant effort mapping the repository, uncovering the right context, and reconciling conflicting documents.
- **Documentation drift:** Artifacts stored outside the codebase seldom keep up with rapid change, eroding trust until teams stop relying on them altogether.

Documentation quality is therefore not a cosmetic issue; it directly affects perceived product quality and the speed at which teams can execute. Establishing a single, well-designed, and actively maintained knowledge hub is the most effective way to keep productivity high as the monorepo evolves.

### 1.2 Docusaurus as a Strategic Platform

Choosing Docusaurus as the foundation of the knowledge hub is an intentional decision. We treat it as a Jamstack-based knowledge platform rather than a static site generator.

- **Docs-as-code mindset:** Documentation lives in the same repository, is versioned with Git, reviewed through pull requests, and deployed via the same CI/CD pipelines as application code. This embeds documentation tasks into the definition of done and hardens the culture around up-to-date references.
- **MDX for rich content:** MDX allows us to embed React components directly inside Markdown. We can enrich the docs with diagrams, live code samples, architecture visualizations, and dashboards that pull real metrics—raising comprehension and engagement.
- **Extensible architecture:** Starting from the `classic` preset provides docs and blog out of the box, yet the plugin system keeps the door open for custom extensions, search providers, or analytics integrations.
- **Versioning and localization:** Built-in support for versioned docs and internationalization gives us a forward path for customers running varied releases or different languages without rebuilding the hierarchy.

Taken together, the platform turns static documents into an operational asset that reinforces quality, clarity, and a consistent engineering culture.

Part II: Information Architecture and Content Strategy
This section details the site structure—where each type of content belongs and why. Disciplined information architecture keeps the growing body of knowledge discoverable and maintainable.

### 2.1 Docusaurus Directory Layout – A Scalable Baseline

We intentionally place the Docusaurus implementation at `docs-website/` in the monorepo root. The structure separates documentation from application code while keeping them tightly linked.

```
project30x/
├── apps/                    # Placeholder implementation directories for all 30 projects
├── docs-website/
│   ├── docusaurus.config.js
│   ├── sidebars.js
│   ├── docs/
│   │   ├── golden-path/
│   │   ├── projects/
│   │   │   ├── overview.md
│   │   │   ├── consensus.md
│   │   │   └── <project-slug>/index.md
│   │   ├── platform/
│   │   ├── architecture/
│   │   │   └── adr/
│   │   └── research/
│   ├── blog/
│   ├── src/
│   └── static/
├── description.md           # Program narrative consolidated into a single brief
└── README.md                # Repository overview
```

Project-specific docs sit directly under `docs/projects/<slug>/`, keeping them in sync with `apps/<slug>/` through front-matter metadata (`source_dir`) or optional symlinks.

### 2.2 Docs vs Blog – A Deliberate Separation

The docs and blog plugins represent two distinct knowledge paradigms:

- **Docs** contain evergreen, canonical truths. They are hierarchical, sidebar-driven, and meant to reflect the current state.
- **Blog** entries are chronological narratives—weekly updates, milestone reviews, retrospectives, and announcements.

Deciding intentionally where content belongs prevents entropy. The separation forces teams to clarify whether they are documenting durable reference material or logging time-bound events.

### 2.3 Building a Network of Knowledge

Directory structure alone is insufficient. We design aggressive cross-linking patterns so readers can move seamlessly across context levels:

- Installation guides link into shared CI/CD documentation rather than duplicating instructions.
- ADRs are referenced from every project relying on the decision to keep rationale visible.
- Weekly reports point back to the features they celebrate and the ADRs that enabled them.
- Retrospectives link to the code or documentation embodying the lessons learned.

The result is a navigable knowledge graph instead of isolated documents.

### 2.4 Content Governance Model

We operationalize the strategy through a simple placement matrix:

| Section        | Directory              | Content Type                     | Primary Audience           | Cadence           | Plugin | Rationale |
| -------------- | ---------------------- | -------------------------------- | -------------------------- | ----------------- | ------ | --------- |
| Golden Path    | `docs/golden-path/`    | Standards, best practices        | All engineers              | Infrequent        | docs   | Canonical operating model |
| Projects       | `docs/projects/`       | Project guides, APIs, runbooks   | Project teams              | As needed         | docs   | Single source of truth per project |
| Platform       | `docs/platform/`       | CI/CD, infrastructure, security  | Engineering & Ops          | Periodic          | docs   | Shared platform references |
| Architecture   | `docs/architecture/`   | ADRs, architecture deep dives    | Architects, senior ICs     | Upon decision     | docs   | Immutable decision history |
| Research       | `docs/research/`       | Experiments, LLM studies         | R&D, technical leadership  | Experiment-driven | docs   | Repeatable scientific records |
| Reports        | `blog/`                | Weekly updates, milestones       | All stakeholders           | Weekly/quarterly  | blog   | Time-bound progress logs |
| Retrospectives | `blog/`                | Sprint/team retrospectives       | Project teams              | Sprint cadence    | blog   | Captured lessons with timestamps |

The table eliminates ambiguity and keeps the architecture coherent as more contributors participate.

Part III: Navigation Design and User Journeys
We optimize navigation so the volume of information remains approachable.

### 3.1 Multi-Sidebar Navigation

A single global sidebar would be unwieldy. Instead we rely on:

- **`globalSidebar`** for program-wide guides (Golden Path, Platform, Architecture, Research).
- **`projectsSidebar`** generated from `docs/projects/<slug>/` to provide project-specific navigation coupled with the corresponding source directories.

### 3.2 Primary Navigation Bar

The site navbar highlights the main entry points:

- **Guides** → global program documentation.
- **Projects** → project catalog and specs.
- **Blog** → time-bound updates and retrospectives.
- **GitHub** → repository source.

This structure keeps the top-level experience simple while leaving room to grow.

### 3.3 Search, Tags, and Metadata

Docusaurus requires an external search integration. We standardize on Algolia DocSearch for typo-tolerant, instantaneous results across the entire hub. Consistent front-matter metadata (id, title, description, tags) increases relevance and future-proofs faceted browsing.

Part IV: Governance and Continuous Evolution
Technology alone cannot keep the hub healthy; disciplined processes and culture are essential.

### 4.1 ADR Workflow

Architecture Decision Records are treated as immutable, versioned artifacts:

1. Draft the ADR using the shared template inside `docs/architecture/adr/` on a feature branch.
2. Review through a pull request to capture rationale, debate, and amendments.
3. Merge once consensus is achieved—at that point the ADR becomes part of the permanent record.

This “ADRs-as-code” approach preserves decision history, keeps discussions transparent, and prevents context loss.

### 4.2 Reporting and Retrospective Cadence

Weekly updates and milestone checkpoints are published via the blog. Sprint retrospectives document lessons learned, blockers, and follow-up actions. Linking these posts to relevant docs or ADRs ensures accountability and traceability.

### 4.3 Operational Quality Gates

Every documentation change follows the same rigor as code changes:

- Pull requests must include updated docs, diagrams, or ADR references.
- CI enforces linting, broken-link checks, and build validation.
- Editors adhere to the metadata conventions outlined above.

### 4.4 Ownership and Roles

We assign clear responsibilities:

- **Program core team** curates the Golden Path and platform documentation.
- **Project maintainers** keep their `docs/projects/<slug>/` entries accurate and aligned with `apps/<slug>/`.
- **Architecture guild** stewards the ADR process.
- **Research guild** maintains experiments and publishes validated findings.

### 4.5 Evolution Roadmap

Future enhancements include enabling doc versioning per release train, adding localized content once international demand emerges, integrating analytics to understand reader behavior, and automating cross-links where metadata indicates relationships.

---

By treating documentation as first-class code, enforcing a consistent information architecture, and investing in the processes that keep content current, Project30x gains a durable knowledge hub that scales with the program.
