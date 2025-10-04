---
id: git-activity-heatmap
title: Python Service – Git Activity Heatmap
description: Service that aggregates commit activity into calendar heatmaps.
displayed_sidebar: smallProjectsSidebar
tags:
  - python
  - fastapi
  - analytics
  - small
---

# Context

Surface commit intensity across multiple repositories to help engineering managers review engagement trends without external SaaS tools.

## Objectives

### Must
- Ingest Git metadata from local repos or authenticated GitHub/GitLab APIs
- Expose REST endpoints for calendar data and serve a React-based visualization
- Provide unit tests for aggregation logic and API contract tests

### Should
- Cache results to avoid repeated expensive history scans
- Allow filtering by author, repository, and time range

### Won't
- Perform advanced analytics like velocity forecasting
- Store raw repository contents beyond metadata snapshots

## Architecture Outline

- FastAPI backend orchestrating `gitpython` pulls and caching summaries in Redis
- React SPA using Recharts or D3 to render calendar heatmaps
- Background worker for scheduled refreshes when connected to remote providers

## Observability & Quality Gates

- Structured logging of sync durations and cache hit ratios
- Prometheus metrics for API latency and background job throughput

## Risks & Mitigations

- **Large repositories cause slow refresh cycles** — Introduce incremental updates and rate-limit API calls
- **Authentication handling could leak tokens** — Use OAuth apps with scoped tokens and store secrets via SOPS-managed configs

## Delivery Plan

### Phase 1 – MVP
- Implement local repository ingestion and calendar aggregation pipeline
- Serve a minimal React heatmap bound to the backend API

### Phase 2 – Polish
- Add remote provider auth flows, caching layer, and background refreshes
- Instrument metrics and document self-hosting requirements

### Phase 3 – Stretch
- Ship Slack or email digest summarizing weekly activity
- Provide CSV export and integration hooks for BI tools
