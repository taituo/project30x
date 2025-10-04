---
id: rag-search-fi
slug: /docs/projects/rag-search-fi
title: SaaS – Finnish RAG Search
description: Retrieval-augmented generation service focused on Finnish corpora.
displayed_sidebar: projectsSidebar
source_dir: apps/rag-search-fi
tags:
  - saas
  - rag
  - llm
  - finnish
---
# Context

Deliver high-quality Finnish question answering using curated corpora, robust retrieval, and transparent evaluation.

## Objectives

### Must
- Implement ingestion pipelines for Finnish documents with chunking and metadata tagging
- Provide retrieval API backed by Qdrant or pgvector with hybrid search capabilities
- Expose RAG inference endpoint with latency and relevance SLIs

### Should
- Support document-level access control tied to tenants
- Offer evaluation harness comparing prompts against reference answers

### Won't
- Train custom large language models beyond lightweight fine-tuning
- Guarantee perfect paraphrase understanding across all dialects

## Architecture Outline

- FastAPI ingestion and inference services orchestrating embeddings and prompt templates
- Vector store (Qdrant/pgvector) with metadata filters and hybrid BM25 ranking
- Next.js UI for search playground, analytics, and feedback capture

## Observability & Quality Gates

- Tracking of retrieval latency percentiles and answer relevance scores
- Dataset versioning via DVC and evaluation dashboards

## Risks & Mitigations

- **Low-quality corpus reduces answer accuracy** — Establish curation workflow and automated evaluation benchmarks
- **Prompt leakage or data exposure** — Implement strict tenancy boundaries and redact sensitive content in preprocessing

## Delivery Plan

### Phase 1 – MVP
- Build ingestion pipeline, vector index, and baseline QA endpoint
- Deploy playground UI with manual evaluation tools

### Phase 2 – Polish
- Add tenant-aware access control, caching, and evaluation harness
- Wire observability dashboards tracking relevance and latency

### Phase 3 – Stretch
- Support multimodal ingestion with OCR for scanned PDFs
- Introduce routing strategies selecting the best prompt template per query
