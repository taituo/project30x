---
id: edge-personalization
slug: /docs/projects/edge-personalization
title: Enterprise – Edge & CDN Personalization
description: Edge runtime delivering personalized content and experiments.
displayed_sidebar: projectsSidebar
source_dir: apps/edge-personalization
tags:
  - enterprise
  - edge
  - personalization
---
# Context

Run personalization logic at the CDN edge to minimize latency and enable rapid experimentation with feature flags.

## Objectives

### Must
- Deploy Edge Workers runtime with feature flag evaluation and A/B routing
- Integrate with KV or D1 storage for per-user state and experimentation data
- Measure performance impact and capture real user metrics

### Should
- Provide UI for experiment configuration and results analysis
- Support fallback strategies when edge environment is unavailable

### Won't
- Guarantee full global latency parity with centralized services
- Replace backend personalization APIs for complex logic

## Architecture Outline

- Cloudflare Workers runtime pulling flag definitions from central API
- KV/D1 storage for user segments, experiment assignments, and metrics
- React UI for marketing and ops teams to launch experiments and review dashboards

## Observability & Quality Gates

- Real user monitoring capturing latency, conversion, and uplift
- Edge-specific logs shipped to analytics warehouse for auditing

## Risks & Mitigations

- **Edge environment limitations restrict libraries** — Abstract shared logic into worker-friendly modules and test in staging
- **Personalization errors degrade UX** — Implement safe defaults and kill switches with alerting

## Delivery Plan

### Phase 1 – MVP
- Deploy edge runtime with basic flag evaluation and metrics capture
- Connect to central configuration service and build monitoring hooks

### Phase 2 – Polish
- Add UI for experiment setup, data export, and kill switches
- Enhance analytics with uplift calculations and cohort analysis

### Phase 3 – Stretch
- Introduce server-driven UI components with personalization tokens
- Support federated learning or on-device models for personalization
