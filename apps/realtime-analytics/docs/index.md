---
id: realtime-analytics
slug: /docs/projects/realtime-analytics
title: SaaS – Realtime Analytics
description: Event ingestion pipeline with live funnel analytics and cohort exploration.
displayed_sidebar: projectsSidebar
source_dir: apps/realtime-analytics
tags:
  - saas
  - analytics
  - streaming
---
# Context

Help product teams understand user journeys quickly with self-serve analytics derived from streaming data.

## Objectives

### Must
- Provide SDKs for web and mobile event ingestion
- Ingest events via Rust service into Kafka or NATS and store in ClickHouse
- Expose UI for funnels, retention, and segmentation

### Should
- Support query caching and export to data warehouse destinations
- Enable anomaly detection on key metrics

### Won't
- Offer fully managed customer data platforms
- Guarantee sub-second analytics on arbitrarily large datasets

## Architecture Outline

- Rust ingest service with back-pressure controls writing to Kafka or NATS
- Streaming processors building aggregates into ClickHouse tables
- Next.js dashboard visualizing funnels and cohorts with live updates

## Observability & Quality Gates

- Lag metrics for ingestion pipeline and processor throughput
- Data quality checks ensuring schema adherence and deduplication

## Risks & Mitigations

- **High traffic overwhelms ingestion pipeline** — Implement rate limits, batching, and autoscaling policies
- **Data privacy concerns emerge** — Support event scrubbing, consent tracking, and data retention policies

## Delivery Plan

### Phase 1 – MVP
- Build ingestion SDK, collector service, and initial ClickHouse schema
- Deliver dashboard for funnels and retention analysis

### Phase 2 – Polish
- Add export capabilities, caching, and anomaly detection
- Instrument pipeline health dashboards and alerting

### Phase 3 – Stretch
- Support user-level profiles and targeted messaging features
- Introduce ML-powered insights and recommendations
