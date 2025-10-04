---
id: ws-chat-mini
title: TypeScript Service – WebSocket Chat Mini
description: Minimal real-time chat showcasing Fastify WebSocket integration.
displayed_sidebar: smallProjectsSidebar
tags:
  - typescript
  - websocket
  - fastify
  - small
---

# Context

Provide a reference implementation for reliable WebSocket messaging with strong typing and security guardrails for hobby-scale apps.

## Objectives

### Must
- Deliver authenticated WebSocket channels with presence updates
- Offer React client with optimistic updates and connection state handling
- Test message routing logic and WebSocket reconnect scenarios

### Should
- Persist messages temporarily for late joiners
- Support deployment as a Vercel preview with serverless WebSocket bridge

### Won't
- Implement federation across regions
- Provide voice or video capabilities

## Architecture Outline

- Fastify server with `@fastify/websocket` and JWT-backed auth middleware
- Redis pub/sub or in-memory broker for fan-out messaging
- React client using state machines to manage connection lifecycle

## Observability & Quality Gates

- Structured logs for connection events and error cases
- Synthetic Playwright checks ensuring chat history loads and messages deliver

## Risks & Mitigations

- **WebSocket scaling limitations on serverless platforms** — Provide deployment profiles for serverless and container modes
- **Security issues from unvalidated payloads** — Enforce schema validation and payload size limits at the edge

## Delivery Plan

### Phase 1 – MVP
- Implement Fastify WebSocket endpoints with in-memory message store
- Ship React client with core chat view and connection handling

### Phase 2 – Polish
- Add Redis-backed persistence, JWT auth, and presence indicators
- Automate integration tests and document deployment choices

### Phase 3 – Stretch
- Implement end-to-end encryption using libsodium for payloads
- Add channel moderation tools and analytics dashboard
