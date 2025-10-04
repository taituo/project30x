---
id: log-explorer
title: SaaS – Graphical Log Explorer
description: UI layer over Loki enabling saved searches, dashboards, and alerts.
displayed_sidebar: saasProjectsSidebar
tags:
  - saas
  - observability
  - loki
---

# Context

Make Loki log analytics approachable for application teams by offering curated visualizations and collaboration features.

## Objectives

### Must
- Integrate with Loki API to query logs using saved searches and templates
- Provide UI for visualizing timelines, histograms, and anomaly indicators
- Include RBAC for shared queries and dashboards

### Should
- Allow exporting dashboards and query history for compliance
- Support alert configuration routed to incident tooling

### Won't
- Replace full SIEM capabilities
- Ingest non-Loki log sources at launch

## Architecture Outline

- Backend proxy service handling auth and caching for Loki queries
- React dashboard with real-time updates and collaborative annotations
- Alerting module integrating with PagerDuty and Slack webhooks

## Observability & Quality Gates

- Usage analytics capturing query cost and latency
- Audit logs for shared dashboard modifications

## Risks & Mitigations

- **Large queries overload Loki cluster** — Add query budgeting, limits, and preview estimations
- **Permission mistakes expose sensitive data** — Implement tenant-aware scopes and test RBAC thoroughly

## Delivery Plan

### Phase 1 – MVP
- Deliver core Loki query interface with saved searches
- Build dashboards with time-series visualizations

### Phase 2 – Polish
- Add collaboration, RBAC, and alert routing
- Instrument usage metrics and optimize caching

### Phase 3 – Stretch
- Offer anomaly detection and ML-assisted query recommendations
- Support multi-cluster aggregation and data residency controls
