---
id: sbom-scan-pipeline
title: Security Pipeline – SBOM & Scan
description: Reusable CI pipeline that generates SBOMs and enforces vulnerability gates.
displayed_sidebar: projectsSidebar
source_dir: apps/sbom-scan-pipeline
tags:
  - security
  - ci
  - sbom
  - small
---

# Context

Codify a security baseline so every project inherits SBOM generation, dependency scans, and enforcement without bespoke setup.

## Objectives

### Must
- Produce CycloneDX SBOM artifacts for container and application builds
- Run Trivy and Semgrep scans with configurable severity thresholds
- Fail pipelines when vulnerabilities exceed agreed risk levels

### Should
- Publish reports as GitHub Actions artifacts and PR comments
- Integrate allowlist mechanism for reviewed findings

### Won't
- Replace dedicated enterprise security tooling
- Handle runtime DAST scanning beyond basic templates

## Architecture Outline

- Reusable GitHub Actions workflow orchestrating SBOM and scan jobs
- Containerized toolchain pinned via digest for reproducibility
- Policy module mapping severity to pipeline gating rules

## Observability & Quality Gates

- Metrics on vulnerability counts and remediation lead time stored in reports
- Audit log summarizing accepted vs blocked findings per run

## Risks & Mitigations

- **High false-positive rates cause alert fatigue** — Provide curated rule sets and allowlist workflow with ADR approval
- **Tool updates break compatibility** — Version-lock containers and schedule maintenance windows for upgrades

## Delivery Plan

### Phase 1 – MVP
- Implement reusable workflow running SBOM generation and scans
- Document integration steps for any project consuming the workflow

### Phase 2 – Polish
- Add PR annotations, reporting dashboards, and allowlist automation
- Integrate with security issue templates for escalations

### Phase 3 – Stretch
- Wire findings into central risk register API
- Add parallel GitLab CI template for hybrid environments
