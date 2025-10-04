# Softa 2025 – Syvätutkimusprojekti

## 1. Repo-rakenne (Monorepo)
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
│  └─ pipelines/           # ci/cd templatet, reusuable workflows
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

## 2. Clean Code & Best Practices
- **Rust:** rustfmt, clippy, cargo-audit, cargo-deny  
- **TS/JS:** eslint, prettier, tsc, vitest  
- **Python:** ruff, black, mypy, pytest  
- **Pre-commit:** lint, format, secret-scan (gitleaks)  
- **Security:** trivy, semgrep, SBOM (CycloneDX), cosign  
- **Observability:** OpenTelemetry, Prometheus, Grafana, Loki, Tempo  
- **Docs:** OpenAPI/Swagger, GraphQL SDL, MkDocs (Material)  
- **Secrets:** SOPS + age  

## 3. Valmiit Config-tiedostot
- `.editorconfig`, `.pre-commit-config.yaml`, `.gitattributes`  
- GitHub/GitLab issue- ja PR-templatet  
- CONTRIBUTING.md, SECURITY.md, CODEOWNERS  

## 4. CI/CD Pipeline (Yleiskuvaus)
1. Build → Lint → Test  
2. Security scan → SBOM → Image build + signature  
3. Deploy dev → E2E test → Promote staging/prod  

## 5. Milestonen Jakaminen
- **Milestone 1: Repo & CI/CD skeleton**  
- **Milestone 2: Perus Apps (Rust API, Next.js UI)**  
- **Milestone 3: Infra & Observability**  
- **Milestone 4: Security**  
- **Milestone 5: AI-kokeilut (RAG/finetuning)**  
- **Milestone 6: SaaS/Enterprise demot**  

## 6. Projektin Laajennus
- Lisää uusia sovelluksia apps/-hakemistoon  
- Kokeile eri pilvipalveluiden integraatioita (AWS/GCP/Azure)  
- Dokumentoi jokainen vaihe ADR:illä  
- Tutki eri CI/CD alustat (GitHub Actions, GitLab CI, Argo Workflows)  

---

## 7. Syvätutkimuksen Aikataulu (Loppuvuosi 2025)

**Tavoite:** 3 projektia viikossa → kaikki samaan monorepoon.  
Jokainen projekti sisältää: Clean Code, linting, security-scan, CI/CD (Actions), dokumentointi (ADR).  

### Lokakuu 2025
- **Viikko 41 (7.–13.10):**
  - Rust CLI (img-minify)
  - Next.js Invoice-PDF UI
  - Python Git-Activity Heatmap  
- **Viikko 42 (14.–20.10):**
  - Rust http-echo+ratelimit
  - WebSocket Chat (TS)
  - GraphQL Pokedex  
- **Viikko 43 (21.–27.10):**
  - Rust/WASM Markdown Previewer
  - Python CRON-as-a-Service
  - Security SBOM+Scan pipeline  
- **Viikko 44 (28.10–3.11):**
  - Infra Kind→Helm Hello
  - Feature Flag Service
  - RAG-hakupalvelu  

### Marraskuu 2025
- **Viikko 45 (4.–10.11):**
  - Forms→Workflows mini-Zapier
  - Graafinen Log Explorer
  - Multi-tenant Billing  
- **Viikko 46 (11.–17.11):**
  - GraphQL BFF Gateway
  - Realtime Analytics
  - Mobiili Offline Notes  
- **Viikko 47 (18.–24.11):**
  - Policy-as-Code Admin
  - Code Snippet Search
  - Order Management Platform  
- **Viikko 48 (25.11–1.12):**
  - Data Mesh Demo
  - Observability Suite
  - ML Feature Store  

### Joulukuu 2025
- **Viikko 49 (2.–8.12):**
  - Enterprise IAM (Keycloak)
  - Document e-sign Service
  - Compliance Pipeline  
- **Viikko 50 (9.–15.12):**
  - Edge + CDN Personalization
  - Multi-cloud GitOps
  - FinOps Dashboard  
- **Viikko 51–52 (16.–31.12):**
  - Bufferiviikot: refaktorointi, dokumentointi, CI/CD-parannukset, clean code review, retrospektiivi

---

## 8. Tutkimuksen Työkalut ja Metodit
- **Clean Code analyysi:** Code Review + lint raportit
- **Codex/Claude/Gemini kokeilut:** Ideointi, refaktorointi, generointi
- **ADR-dokumentaatio:** jokaiselle isommalle päätökselle
- **Raportointi:** Viikkoraportti → `docs/reports/week-XX.md`
- **Katselmointi:** Retrospektiivi joka kuukausi

