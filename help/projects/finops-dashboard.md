---
id: finops-dashboard
title: Enterprise – FinOps Dashboard
description: Cost observability platform aggregating cloud spend and optimization insights.
displayed_sidebar: projectsSidebar
source_dir: apps/finops-dashboard
tags:
  - enterprise
  - finops
  - analytics
---

# Context

Provide finance and engineering teams with shared visibility into cloud costs and actionable recommendations.

## Objectives

### Must
- Ingest cost data from AWS, GCP, and Azure billing exports
- Normalize costs by tags or projects and track budgets versus actuals
- Surface optimization recommendations and alerting for anomalies

### Should
- Integrate with governance tools for rightsizing tickets
- Provide forecasting based on historical usage

### Won't
- Replace enterprise ERP or finance tools
- Handle procurement workflows directly

## Architecture Outline

- ETL pipelines loading billing data into ClickHouse or BigQuery
- Analytics service computing allocations, budgets, and anomaly detection
- React dashboard with per-team views and drill-down capabilities

## Observability & Quality Gates

- Data freshness metrics and anomaly detection precision/recall tracking
- Alerting on budget breaches delivered to Slack or email

## Risks & Mitigations

- **Incorrect allocation erodes trust** — Validate ETL with reconciliation tests and provide override tooling
- **Data volume challenges** — Implement partitioning, compression, and retention strategies tailored to billing data

## Delivery Plan

### Phase 1 – MVP
- Set up ingestion for one cloud provider and deliver base dashboards
- Implement anomaly detection and notification hooks

### Phase 2 – Polish
- Add multi-cloud support, forecasting, and optimization ticket integration
- Enhance role-based views for finance versus engineering teams

### Phase 3 – Stretch
- Introduce scenario planning and what-if simulations
- Integrate carbon footprint tracking alongside cost data
