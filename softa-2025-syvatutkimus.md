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
  - Monorepo, CI pipeline pohjat, linting & formatters  
- **Milestone 2: Perus Apps (Rust API, Next.js UI)**  
  - Hello World, DB-yhteys, OpenAPI/GraphQL skeema  
- **Milestone 3: Infra & Observability**  
  - Helm + Kind, Prometheus + Grafana + Loki, OTel setup  
- **Milestone 4: Security**  
  - Trivy, Semgrep, SBOM, Secrets (SOPS)  
- **Milestone 5: AI-kokeilut (RAG/finetuning)**  
  - Qdrant/pgvector, RAG haku, LoRA/PEFT demo  
- **Milestone 6: SaaS/Enterprise demot**  
  - Feature flags, multi-tenant billing, GitOps + Multi-cloud  

## 6. Projektin Laajennus
- Lisää uusia sovelluksia apps/-hakemistoon (GraphQL Gateway, Mobile, Workerit)  
- Kokeile eri pilvipalveluiden integraatioita (AWS/GCP/Azure)  
- Dokumentoi jokainen vaihe ADR:illä  
- Tutki eri CI/CD alustat (GitHub Actions, GitLab CI, Argo Workflows)  
