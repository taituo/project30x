---
id: invoice-pdf-ui
title: TypeScript Web – Invoice PDF Generator
description: React-based form flow that produces branded PDF invoices.
displayed_sidebar: projectsSidebar
source_dir: apps/invoice-pdf-ui
tags:
  - typescript
  - react
  - pdf
  - small
---

# Context

Deliver a browser-first invoicing experience so founders can prototype billing without custom tooling.

## Objectives

### Must
- Provide a responsive React form with validation for payer, line items, and tax fields
- Generate deterministic PDFs in both browser and server execution
- Include unit tests for calculation logic and visual regressions for the PDF layout

### Should
- Support theming to reflect different brand palettes
- Persist draft invoices locally for offline continuation

### Won't
- Integrate with external payment processors
- Implement complex multi-currency tax automation beyond basic rates

## Architecture Outline

- Next.js App Router project with React Hook Form handling validation and state
- Serverless function leveraging `pdf-lib` to render invoices with optional server-side generation
- Shared UI primitives from the monorepo packages for typography and layout

## Observability & Quality Gates

- Playwright flows covering form submission and PDF download assertions
- Metrics capturing generation duration and error rates for serverless execution

## Risks & Mitigations

- **Browser differences break PDF rendering** — Adopt a deterministic layout engine and run visual regression tests across Chromium and Firefox
- **Formatting fails on large datasets** — Impose constraints and warn users when invoices exceed supported length

## Delivery Plan

### Phase 1 – MVP
- Scaffold React form with validation and preview pane
- Implement PDF export with static styling and unit-tested totals

### Phase 2 – Polish
- Add theme selector, local draft persistence, and accessibility improvements
- Wire Playwright smoke tests and surface metrics in the dashboard

### Phase 3 – Stretch
- Introduce localization and currency formatting packs
- Offer bulk export queue and sharing links
