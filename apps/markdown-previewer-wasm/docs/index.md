---
id: markdown-previewer-wasm
slug: /docs/projects/markdown-previewer-wasm
title: Rust/WASM – Markdown Previewer
description: Live markdown preview application compiled to WebAssembly.
displayed_sidebar: projectsSidebar
source_dir: apps/markdown-previewer-wasm
tags:
  - rust
  - wasm
  - markdown
  - small
---
# Context

Showcase how to share Rust code between native and WASM targets while providing fast, offline-capable markdown previews.

## Objectives

### Must
- Render markdown to HTML with live preview and syntax highlighting
- Compile to WASM with ergonomic bindings and ship a minimal UI shell
- Test parsing correctness with golden inputs and outputs

### Should
- Provide desktop build via Tauri or similar wrapper
- Support local persistence of documents and offline mode

### Won't
- Implement collaborative editing features
- Offer full CMS capabilities like publishing or comments

## Architecture Outline

- Rust core parser using `pulldown-cmark` with WASM bindings via `wasm-bindgen`
- Leptos or Yew front-end for web previews sharing core rendering logic
- Service worker enabling offline caching of assets and documents

## Observability & Quality Gates

- Web vitals monitoring for render latency and bundle size budgets
- Unit tests comparing HTML output to reference snapshots

## Risks & Mitigations

- **WASM bundle size inflates load times** — Apply code splitting and measure sizes against target budgets
- **Feature parity drift between native and web builds** — Centralize logic in shared crate and test both targets in CI

## Delivery Plan

### Phase 1 – MVP
- Build Rust markdown core and hook to simple web UI
- Automate WASM build with tests verifying output correctness

### Phase 2 – Polish
- Add offline persistence, theming, and packaging for desktop
- Instrument performance metrics and document setup

### Phase 3 – Stretch
- Introduce collaborative extensions via CRDT integration
- Embed plugin system for custom markdown extensions
