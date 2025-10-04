---
id: img-minify-cli
slug: /docs/projects/img-minify-cli
title: Rust CLI – img-minify
description: Command-line image minification tool demonstrating performant Rust pipelines.
displayed_sidebar: projectsSidebar
source_dir: apps/img-minify-cli
tags:
  - rust
  - cli
  - tooling
  - small
---
# Context

Build a fast, reproducible CLI that optimizes common image formats so developers can integrate deterministic compression into CI workflows.

## Objectives

### Must
- Support lossless and lossy compression for PNG and JPEG inputs via explicit flags
- Provide deterministic exits with clear error codes for automation scenarios
- Ship unit tests covering quality levels and file handling edge cases

### Should
- Expose concurrency controls to leverage multi-core processing safely
- Emit structured logs reporting before/after size metrics per file

### Won't
- Build a graphical desktop interface
- Implement distributed processing beyond a single host

## Architecture Outline

- Rust binary using `clap` for argument parsing and the `image` crate for encode/decode routines
- Worker pool via `rayon` to parallelize independent file operations
- Optional manifest writer summarizing aggregate compression savings

## Observability & Quality Gates

- Structured logging with `tracing` capturing timings and compression ratios
- Benchmark harness measuring throughput to detect regressions

## Risks & Mitigations

- **Edge-case image formats may fail to decode** — Maintain a regression corpus with diverse formats and add property tests to guard against panics
- **Compression quality regressions reduce utility** — Track visual fidelity metrics (SSIM) in automated checks before release

## Delivery Plan

### Phase 1 – MVP
- Implement core CLI pipeline for PNG/JPEG with configurable output directory
- Add quality flag parsing and golden tests covering success and failure cases

### Phase 2 – Polish
- Introduce concurrency limits, structured logs, and baseline performance benchmarks
- Document CI integration patterns and publish sample Makefile target

### Phase 3 – Stretch
- Compile a WASM build reusing the compression core for browser demos
- Offer plug-in hooks for custom post-processing such as metadata stripping
