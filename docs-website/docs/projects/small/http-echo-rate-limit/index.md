---
id: http-echo-rate-limit
title: Rust Service – HTTP Echo with Rate Limiting
description: Minimal axum service showcasing middleware-driven rate limiting.
displayed_sidebar: smallProjectsSidebar
tags:
  - rust
  - axum
  - redis
  - small
---

# Context

Demonstrate how to protect lightweight services with per-client throttling while exposing observability hooks for latency and errors.

## Objectives

### Must
- Expose HTTP echo endpoint with configurable rate limits per client identifier
- Return informative headers describing remaining quota and reset time
- Cover limiter logic with unit tests and integration smoke tests

### Should
- Persist counters in Redis to support multi-instance scaling
- Publish Prometheus metrics for request outcomes and limiter events

### Won't
- Implement full authentication workflows
- Support distributed rate limiting across regions

## Architecture Outline

- Axum server with `tower` middleware implementing token bucket rate limiting
- Redis storage for shared counters when running multiple replicas
- Tracing integration exporting spans and metrics to the central collector

## Observability & Quality Gates

- Prometheus metrics for allowed/blocked request counts and latency buckets
- OTel traces for representative endpoints to test instrumentation pattern

## Risks & Mitigations

- **Incorrect limiter math blocks legitimate traffic** — Add property tests and soak tests to validate quota calculations
- **Redis outages degrade availability** — Provide in-memory fallback with degraded guarantees and alerting

## Delivery Plan

### Phase 1 – MVP
- Build echo endpoint with in-memory limiter and tests
- Instrument structured logs and metrics exporters

### Phase 2 – Polish
- Add Redis-backed storage and configuration through environment variables
- Document deployment patterns and provide Helm values example

### Phase 3 – Stretch
- Offer gRPC variant sharing the same limiter
- Benchmark latency impacts under different concurrency levels
