---
id: code-snippet-search
slug: /docs/projects/code-snippet-search
title: SaaS – Code Snippet Search
description: Semantic search engine for source code across repositories.
displayed_sidebar: projectsSidebar
source_dir: apps/code-snippet-search
tags:
  - saas
  - search
  - developer-experience
---
# Context

Help developers discover reuse opportunities and enforce best practices through semantic code search.

## Objectives

### Must
- Ingest repository code with language-aware parsing and tokenization
- Generate embeddings and metadata for search via tree-sitter and vector databases
- Expose APIs and UI for search, filters, and snippet previews

### Should
- Support PR bot suggestions for similar code patterns
- Provide source attribution and licensing metadata

### Won't
- Replace full code review workflows
- Execute arbitrary code fragments in search results

## Architecture Outline

- Python ingestion service using tree-sitter to build AST features
- Vector search via Qdrant or pgvector augmented with keyword index
- Next.js UI and optional GitHub app for inline suggestions

## Observability & Quality Gates

- Search latency and relevance metrics via feedback loop
- Ingestion pipeline monitoring for queue depth and errors

## Risks & Mitigations

- **Large monorepos strain ingestion pipeline** — Implement incremental updates and caching of unchanged files
- **Sensitive code exposure** — Respect repository visibility and enforce access tokens per user

## Delivery Plan

### Phase 1 – MVP
- Build ingestion pipeline and baseline semantic search API
- Deliver UI for searching, filtering, and previewing snippets

### Phase 2 – Polish
- Add PR bot integration, attribution data, and feedback capture
- Instrument quality metrics and usage analytics

### Phase 3 – Stretch
- Recommend refactors and code owners based on similarity
- Support IDE extensions that surface search results contextually
