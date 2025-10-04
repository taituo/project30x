
# Softa 2025 – SYVÄTUTKIMUS (Master-dokumentti)

Tämä on yksi iso, ladattava **syvätutkimusdokkari**, joka yhdistää:
- **Golden Path 2025** (best practices kaikille projekteille)
- **30 projektia** (pienet → SaaS → enterprise) – lyhyet kuvaukset, Stack & Stretch
- **Repo- ja hakemistorakenne** monorepoon
- **CI/CD & laadunvarmistus** (linting, security, SBOM, allekirjoitus, portit)
- **Milestone-malli** sekä **viikkokohtainen aikataulu** loppuvuodelle 2025 (3 projektia/viikko)
- **Tutkimusmetodit** (Clean Code, ADR, raportointi, LLM-kokeilut: Claude/Gemini/Code-LLM)

> Kaikki projektit elävät samassa monorepossa **apps/**-hakemistossa. Käytä nimeämistä `apps/<domain>-<teknologia>` ja yhteisiä **packages/**-kirjastoja.

---

## Golden Path 2025 (kaikille projekteille)

- **Repo & laatu:** Conventional Commits, README + ADR:t, pre-commit hookit.  
  - **Rust:** `cargo fmt`, `clippy`, `cargo audit`, `cargo deny`  
  - **TS/JS:** `pnpm`/`npm`, `eslint`, `prettier`, `tsc`, `vitest`, `playwright`  
  - **Python:** `ruff`, `black`, `mypy`, `pytest`
- **Turvallisuus:** `trivy` (kuvat & IaC), `semgrep`, riippuvuusaudit, SAST/DAST-vaihe.
- **CI/CD:** GitHub Actions **tai** GitLab CI (build → test → lint → security → image → push → deploy).
- **Säilö & deploy:** monivaiheinen Dockerfile, Helm-chart + Kustomize; preview-ympäristöt PR:lle.
- **Infra koodina:** Terraform (+ Terragrunt), salaisuudet: SOPS + age.
- **Havaittavuus:** OpenTelemetry, Prometheus/Grafana, Loki, Tempo.
- **Tietokannat & välimuisti:** Postgres (+`pgvector`), Redis. Viestitys: NATS tai Kafka.
- **Auth:** OIDC/OAuth2 (Keycloak tai pilvipalvelu).
- **Paikallinen k8s:** `k3d` tai `kind`. Pilvi: AWS EKS / GCP GKE / Azure AKS.
- **Feature flags:** Unleash.
- **Dokumentaatio:** OpenAPI/Swagger, GraphQL SDL, MkDocs.
- **Data/AI:** Qdrant tai pgvector, LangChain/LlamaIndex, mallien hienosäätö demoihin (LoRA/PEFT).

---

## Repo- & hakemistorakenne (monorepo)

```
softa-2025/
├─ apps/
│  ├─ api-rust/            # axum + Postgres + OpenAPI
│  ├─ web-next/            # Next.js App Router + tRPC/REST
│  ├─ worker-python/       # FastAPI/workerit, RAG/ETL
│  └─ mobile-expo/         # React Native kokeilut
├─ packages/
│  ├─ ui/                  # jaettu UI-kirjasto
│  ├─ ts-config/           # tsconfig, eslint-config
│  └─ proto/               # OpenAPI/GraphQL/avro/proto-schemat
├─ ai/
│  ├─ rag/                 # Qdrant/pgvector, indeksointi
│  └─ finetune/            # LoRA/PEFT kokeilut, datasetit (DVC)
├─ infra/
│  ├─ terraform/           # aws/gcp/azure + local-kind
│  ├─ helm/                # chartit + kustomize overlayt
│  └─ pipelines/           # ci/cd templatet, reusable workflows
├─ ops/
│  ├─ observability/       # OTel collector, Prom, Loki, Tempo
│  └─ security/            # semgrep, trivy, cosign, sops
├─ docs/
│  ├─ adr/                 # Architecture Decision Records
│  └─ mkdocs/              # Developer Docs (MkDocs + Material)
├─ .github/ or .gitlab/    # actions/pipelines + issue/pr templatet
├─ Makefile                # make dev, test, lint, docker, kind-up
├─ docker-compose.yaml     # local dev stack
└─ CODEOWNERS, LICENSE, README.md, CONTRIBUTING.md, SECURITY.md
```

- **Naming & koodin jako:** jokaisella projektilla oma `apps/<nimi>/` kansio; jaettu koodi `packages/`.
- **Salaisuudet:** salaa `infra/`-avainmateriaali SOPS+age:lla; runtime: External Secrets + KMS.
- **Dokut:** ADR jokaiseen arkkitehtuuripäätökseen, PR-template kysyy riskit/mittarit.

---

## CI/CD & laadunvarmistus (yhden putken malli)

**Vaiheet:** build → lint → test → security (Trivy/Semgrep) → SBOM (CycloneDX) → image build → `cosign`-allekirjoitus → deploy dev → E2E → promote.

**Portit:** putki katkeaa, jos testit tai turvaskannit failaavat. Preview-ympäristö PR:lle.

> Käytä GitHub Actionsin *reusable workflows* tai GitLabin *includes* monorepon yli.

---

## 30 projektia (pienet → SaaS → enterprise)

### 10 pientä / weekend-proggista
1. **Rust CLI: “img-minify”** – häviötön/häviöllinen kuvapakkaus.  
   *Stack:* Rust (`image`, `clap`), `rayon`. *Stretch:* WASM-porttaus selaimeen.

2. **TS/React “Invoice-PDF”** – lomake → PDF.  
   *Stack:* Next.js/React, React Hook Form, `pdf-lib`. *Stretch:* i18n.

3. **Python “Git-Activity Heatmap”** – repoista kontribuutiokartta.  
   *Stack:* Python, `gitpython`, FastAPI, pieni React UI. *Stretch:* GitHub/GitLab OAuth.

4. **Rust “http-echo+rate-limit”** – nopea HTTP-palvelin ratelimiteillä.  
   *Stack:* `axum`, `tower`, Redis. *Stretch:* OTel + Prom-mittarit.

5. **TS “WebSocket Chat mini”** – minimaalinen live-chat.  
   *Stack:* Node (Fastify), WS, React. *Stretch:* E2E-salaus (libsodium).

6. **GraphQL “Pokedex”** – julkinen API + client.  
   *Stack:* Apollo Server, Apollo Client/Urql. *Stretch:* dataloader + schema-federointi.

7. **Rust/WASM “Markdown Previewer”**.  
   *Stack:* `wasm-bindgen`, Leptos/wasm. *Stretch:* offline PWA.

8. **Python “CRON-as-a-Service (local)”** – YAML-ajastukset & webhookit.  
   *Stack:* FastAPI, APScheduler. *Stretch:* UI + JWT-auth.

9. **Security “SBOM+Scan Pipeline”** – generoi SBOM & aja Trivy/Semgrep.  
   *Stack:* Actions/CI, CycloneDX. *Stretch:* portti: katkaise build CVSS>7.

10. **Infra “Kind→Helm Hello”** – hello-app + Helm + Ingress + TLS dev-cert.  
    *Stack:* kind/k3d, Helm, cert-manager (dev). *Stretch:* ArgoCD preview-deploy PR:ille.

### 10 SaaS-kokoista
11. **Feature Flag Service** (kevyt Unleash).  
    *Stack:* Rust (axum) tai Node, Postgres, Redis, React. *Stretch:* SDK:t (TS/Rust/Python), audit-logit.

12. **RAG-hakupalvelu (suomi)**.  
    *Stack:* FastAPI, Qdrant/pgvector, Next.js UI, OIDC. *Stretch:* OCR + älykäs reititys (RAG).

13. **Forms→Workflows (mini-Zapier)**.  
    *Stack:* Node+TS, Temporal(ite), React. *Stretch:* julkiset webhooks + mallikirjasto.

14. **Graafinen Log Explorer** Loki-taustaan.  
    *Stack:* Go/Rust/Python, Loki API, React. *Stretch:* tallennetut kyselyt & hälytykset.

15. **Multi-tenant Billing** Stripe-integraatiolla.  
    *Stack:* Next.js App Router, tRPC/REST, Postgres. *Stretch:* org-rajaukset + audit.

16. **GraphQL BFF Gateway** kolmen mikropalvelun yli.  
    *Stack:* Apollo Gateway, subgraphit (Users/Orders/Inventory). *Stretch:* persisted queries + cache.

17. **Realtime Analytics** – SDK eventeille, UI funneleille.  
    *Stack:* Rust ingest (NATS/Kafka), ClickHouse, React. *Stretch:* segmentointi & kohortit.

18. **Mobiili “Offline Notes”**.  
    *Stack:* React Native/Expo, SQLite/WatermelonDB; sync-palvelin (Rust). *Stretch:* E2E-salaus.

19. **Policy-as-Code Admin** (RBAC/ABAC).  
    *Stack:* OPA/Regula, React UI, FastAPI. *Stretch:* GitOps-synkronointi.

20. **Code Snippet Search** – semanttinen haku repoista.  
    *Stack:* Python, tree-sitter, embeddings, Qdrant, Next.js. *Stretch:* PR-bot refaktorointiin.

### 10 enterprise-henkistä (täydet putket & k8s)
21. **Order Management Platform** – mikropalvelut, saagat, idempotenssi.  
    *Stack:* Rust (axum) + Kafka/NATS, Postgres, Temporal, GraphQL BFF, React. *Stretch:* blue/green deploy, chaos.

22. **Data Mesh Demo** – domain-datatuotteet.  
    *Stack:* Kafka→Spark/Flink, Lakehouse (Iceberg/Delta), Trino, dbt, Superset. *Stretch:* lineage (OpenLineage).

23. **Observability Suite** – OTel→Prom+Tempo+Loki, SLO-UI.  
    *Stack:* helmfile/kustomize, Grafana dashboards. *Stretch:* SLO-budjetit & automaattinen rollback.

24. **ML Feature Store (batch/online)**.  
    *Stack:* Feast, Redis online store, offline Parquet, FastAPI, model serving. *Stretch:* A/B + shadow deploy.

25. **Enterprise IAM + Keycloak** monivuokraajille.  
    *Stack:* Keycloak, OIDC, per-tenant realm/policies, audit. *Stretch:* SCIM-provisiointi.

26. **Document e-sign** – allekirjoitukset, audit trail, säilytys.  
    *Stack:* Node/Rust backend, S3/GCS, KMS, React. *Stretch:* aikaleimaserti (RFC 3161).

27. **Compliance Pipeline** – SOC2/GDPR evidenssi.  
    *Stack:* Terraform evidence exporter, CI-artifaktit, OpenControls. *Stretch:* kontrollikatalogi-UI & raportit.

28. **Edge + CDN Personalization** – AB-testit ja feature-flags reunassa.  
    *Stack:* Cloudflare Workers/Pages, KV/D1, React. *Stretch:* server-driven UI & RUM.

29. **Multi-cloud GitOps** – sama appi EKS+GKE+AKS.  
    *Stack:* ArgoCD, Helm, ExternalDNS, cert-manager, Crossplane. *Stretch:* failover & traffic shifting (Istio/Linkerd).

30. **FinOps Dashboard** – kustannusdata & optimointi.  
    *Stack:* keräimet (AWS/GCP/Azure), ClickHouse/BigQuery, React. *Stretch:* sääntökone right-sizingiin.

---

## Miten toteutan “best practices” nopeasti

- **Monorepo-malli:** `apps/` (api, web, workers, mobile), `packages/` (shared), `infra/` (terraform, helm), `docs/`.
- **CI-templatet:** build/test/lint → SBOM+scan → docker buildx → push GHCR/GitLab registry → helm template/lint → deploy dev → e2e → promote.
- **Deploy-strategia:** dev (kind/k3d) → staging (pilvi) → prod; ArgoCD tai Flux.
- **Versiointi & julkaisu:** `semantic-release` tai `cargo release`, changelog automaattisesti.
- **Mittarit & lokit alusta asti:** HTTP latency, error rate, business KPI.
- **Testit:** unit → integration (docker-compose) → e2e (Playwright).
- **Turva:** riippuvuuslukot, minimi-oikeudet (IAM), image-allekirjoitus (cosign), salaisuudet SOPSissa.

---

## Milestonen malli

- **Milestone 1: Repo & CI/CD skeleton** – monorepo, CI, linting/formatters.  
- **Milestone 2: Perus Apps (Rust API, Next.js UI)** – Hello World, DB, OpenAPI/GraphQL.  
- **Milestone 3: Infra & Observability** – Helm + Kind, Prom+Grafana+Loki, OTel.  
- **Milestone 4: Security** – Trivy, Semgrep, SBOM, SOPS.  
- **Milestone 5: AI-kokeilut** – Qdrant/pgvector, RAG, LoRA/PEFT.  
- **Milestone 6: SaaS/Enterprise demot** – feature flags, billing, GitOps+multi-cloud.

---

## Syvätutkimuksen aikataulu (loppuvuosi 2025)

**Tavoite:** 3 projektia / viikko, kaikki samaan monorepoon. Jokainen projekti: Clean Code, linting, security-scan, CI/CD (Actions), ADR.

### Lokakuu 2025
- **Viikko 41 (7.–13.10):** Rust CLI (img-minify) · Next.js Invoice-PDF · Python Git-Activity Heatmap  
- **Viikko 42 (14.–20.10):** Rust http-echo+ratelimit · WebSocket Chat (TS) · GraphQL Pokedex  
- **Viikko 43 (21.–27.10):** Rust/WASM Markdown Previewer · Python CRON-as-a-Service · Security SBOM+Scan  
- **Viikko 44 (28.10–3.11):** Infra Kind→Helm Hello · Feature Flag Service · RAG-hakupalvelu

### Marraskuu 2025
- **Viikko 45 (4.–10.11):** Forms→Workflows · Graafinen Log Explorer · Multi-tenant Billing  
- **Viikko 46 (11.–17.11):** GraphQL BFF Gateway · Realtime Analytics · Mobiili Offline Notes  
- **Viikko 47 (18.–24.11):** Policy-as-Code Admin · Code Snippet Search · Order Management Platform  
- **Viikko 48 (25.11–1.12):** Data Mesh Demo · Observability Suite · ML Feature Store

### Joulukuu 2025
- **Viikko 49 (2.–8.12):** Enterprise IAM (Keycloak) · Document e-sign · Compliance Pipeline  
- **Viikko 50 (9.–15.12):** Edge + CDN Personalization · Multi-cloud GitOps · FinOps Dashboard  
- **Viikot 51–52 (16.–31.12):** Bufferi: refaktorointi, dokumentointi, CI/CD-parannukset, clean code review, retrospektiivi

---

## Tutkimusmetodit & LLM-kokeilut

- **Clean Code -katselmointi:** PR-templateen DoD-checklist, lint/test/secureraportit.  
- **LLM-avusteinen tutkimus:** kokeile **Claude**, **Gemini**, ja koodiin erikoistuneita **Code-LLM**:iä ideointiin, generointiin ja refaktorointiin; lisää promptit & löydökset `docs/research/` alle.  
- **ADR:** jokaisesta isommasta päätöksestä `docs/adr/ADR-YYYYMMDD-<otsikko>.md`.  
- **Raportointi:** viikkoraportti `docs/reports/week-XX.md` (mitä opittiin, mittarit, riskit).  
- **Retrot:** kuukauden lopussa retro -> päätökset ADR:ksi / action listaksi.

---

## Aloitus: 10 komennon "bootstrap"

1. `make dev` – käynnistä local stack (docker-compose).  
2. `make lint` – aja kaikki kielen lintit.  
3. `make test` – aja unit/integration.  
4. `make sbom` – generoi CycloneDX.  
5. `make scan` – Trivy + Semgrep.  
6. `make image` – buildaa image monivaiheisella Dockerfilella.  
7. `make sign` – allekirjoita `cosign`illa.  
8. `make kind-up` – local kind-klusteri + Helm chartit.  
9. `make e2e` – Playwright-skenaariot.  
10. `make docs` – MkDocs run (hot reload).

---

**Valmista!** Tämä master-dokkari toimii lähtöalustana. Lisää jokainen toteutettu projekti `apps/`-alle ja päivitä ADR:t sekä `docs/reports/` viikoittain.
