---
id: data-mesh-demo
title: Enterprise – Data Mesh Demo
description: Domain-aligned data products with streaming ingestion and governance.
displayed_sidebar: enterpriseProjectsSidebar
tags:
  - enterprise
  - data-mesh
  - analytics
---

# Context

Demonstrate data mesh principles by empowering domain teams to publish certified datasets with clear ownership.

## Objectives

### Must
- Ingest domain events into lakehouse storage with schema enforcement
- Publish data products via Trino endpoints and dbt transformations
- Track lineage and ownership metadata for each product

### Should
- Support quality checks and SLAs per data product
- Enable consumer self-service subscriptions and access controls

### Won't
- Build custom BI tooling beyond dashboards
- Guarantee real-time SLAs for all datasets

## Architecture Outline

- Kafka or Flink pipelines loading into Iceberg or Delta tables
- Trino catalog with dbt transformations and Superset dashboards
- OpenLineage integration for cross-domain observability

## Observability & Quality Gates

- Data quality metrics (freshness, completeness, drift) surfaced per product
- Lineage graphs accessible to producers and consumers

## Risks & Mitigations

- **Schema changes break downstream consumers** — Adopt contract testing and staged rollout with compatibility checks
- **Governance overhead slows teams** — Streamline approval workflows and provide templates for rapid product creation

## Delivery Plan

### Phase 1 – MVP
- Stand up ingestion pipelines and define exemplar data products
- Expose Trino endpoints and dashboards with lineage metadata

### Phase 2 – Polish
- Add quality SLAs, automated checks, and access request flows
- Document domain onboarding guide and governance policies

### Phase 3 – Stretch
- Integrate ML feature catalog powered by the same data products
- Enable cross-cloud replication and disaster recovery plans
