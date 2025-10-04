---
id: ml-feature-store
title: Enterprise – ML Feature Store
description: Hybrid feature store supporting batch and online serving.
displayed_sidebar: enterpriseProjectsSidebar
tags:
  - enterprise
  - ml
  - feature-store
---

# Context

Enable ML teams to reuse validated features across models with consistent governance and monitoring.

## Objectives

### Must
- Provide offline store built on Parquet or Delta for training data
- Offer online store using Redis or Feast for low-latency retrieval
- Document feature registration, materialization, and backfill workflows

### Should
- Integrate with model serving pipeline for real-time inference
- Support A/B testing and shadow deployments

### Won't
- Train or host models beyond reference examples
- Guarantee compliance for regulated industries out-of-the-box

## Architecture Outline

- Feast deployment orchestrating offline and online stores with orchestrated pipelines
- FastAPI admin and retrieval service, optionally with gRPC interface
- Metadata catalog tracking feature lineage and ownership

## Observability & Quality Gates

- Feature freshness, drift, and null-rate metrics surfaced in dashboards
- Audit logs for feature definition changes and access patterns

## Risks & Mitigations

- **Stale features degrade model performance** — Automate freshness checks and alerts for late jobs
- **Governance gaps for feature ownership** — Enforce registration workflow with approvals and documented SLAs

## Delivery Plan

### Phase 1 – MVP
- Set up Feast with demo dataset and dual offline/online stores
- Document registration and retrieval patterns with example model

### Phase 2 – Polish
- Add monitoring metrics, access controls, and CI integration
- Connect to model serving pipeline for inference flows

### Phase 3 – Stretch
- Support multi-tenant feature isolation and billing
- Integrate automated drift remediation suggestions
