---
id: graphql-bff-gateway
title: SaaS – GraphQL BFF Gateway
description: Federated GraphQL gateway aggregating multiple backend services.
displayed_sidebar: saasProjectsSidebar
tags:
  - saas
  - graphql
  - gateway
---

# Context

Deliver a single API edge for client teams while shielding them from backend sprawl and version churn.

## Objectives

### Must
- Compose subgraphs for Users, Orders, and Inventory services
- Implement persisted queries, caching, and auth propagation
- Set up schema checks preventing breaking changes before deploy

### Should
- Provide tracing for resolver latency and upstream dependency health
- Offer developer portal with schema docs and mock responses

### Won't
- Own business logic that belongs in downstream services
- Expose direct database access

## Architecture Outline

- Apollo Gateway or GraphQL Mesh orchestrating subgraph schemas and execution
- Edge caching using Redis or Apollo Router features
- CI integration with schema registry and contract tests

## Observability & Quality Gates

- Resolver-level tracing correlated with upstream service metrics
- Error rate dashboards segmented by client application

## Risks & Mitigations

- **Slow upstream service degrades entire gateway** — Implement timeout, retry, and circuit breakers per subgraph
- **Schema conflicts between teams** — Enforce contract review process and automated compatibility checks

## Delivery Plan

### Phase 1 – MVP
- Compose initial subgraphs and expose gateway endpoints
- Set up persisted queries and authentication propagation

### Phase 2 – Polish
- Integrate schema registry checks, caching, and tracing dashboards
- Document onboarding guide for new client teams

### Phase 3 – Stretch
- Add API monetization hooks and request cost analytics
- Support gRPC or REST bridging via GraphQL Mesh plugins
