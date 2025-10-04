---
id: cron-as-a-service
title: Python Service – Cron-as-a-Service
description: Hosted scheduler translating YAML definitions into webhook executions.
displayed_sidebar: smallProjectsSidebar
tags:
  - python
  - scheduler
  - fastapi
  - small
---

# Context

Give teams a lightweight internal cron alternative with auditable schedules and minimal ops overhead.

## Objectives

### Must
- Parse YAML schedules into persisted jobs with timezone awareness
- Execute webhooks with retries, exponential backoff, and reporting
- Cover schedule parser and executor with unit and integration tests

### Should
- Expose React dashboard for job status and manual trigger
- Emit audit logs capturing job history and payload responses

### Won't
- Provide multi-region failover
- Implement user role hierarchy beyond admin/basic operators

## Architecture Outline

- FastAPI application backed by PostgreSQL for schedule definitions
- APScheduler or Celery worker executing jobs with distributed locks
- React UI for management and JWT-based access control

## Observability & Quality Gates

- Task execution metrics exported to Prometheus (success/failure, latency)
- Structured logs for payloads and retry attempts, forwardable to Loki

## Risks & Mitigations

- **Job execution drift due to clock skew** — Sync time via NTP and include drift alerts
- **Webhook endpoints become unavailable** — Implement circuit breaker and dead-letter queue for failed deliveries

## Delivery Plan

### Phase 1 – MVP
- Implement parser, scheduler, and webhook executor with tests
- Expose minimal API for CRUD operations on schedules

### Phase 2 – Polish
- Add dashboard, JWT auth, and audit logging
- Instrument metrics and integrate alerting hooks

### Phase 3 – Stretch
- Support templated payloads with secrets injection
- Enable schedule export/import and Terraform provider
