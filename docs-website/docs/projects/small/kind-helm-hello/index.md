---
id: kind-helm-hello
title: Infra Demo – kind → Helm Hello
description: Infrastructure walkthrough deploying a hello service to kind using Helm.
displayed_sidebar: smallProjectsSidebar
tags:
  - infrastructure
  - helm
  - kubernetes
  - small
---

# Context

Teach contributors how to bootstrap local Kubernetes environments with GitOps-friendly tooling and TLS.

## Objectives

### Must
- Provision kind cluster with ingress, cert-manager, and metrics stack
- Deploy sample hello service via Helm chart with values overrides
- Document teardown and troubleshooting steps for the local cluster

### Should
- Automate setup via Makefile target and reusable scripts
- Validate deployment with smoke tests and ingress checks

### Won't
- Operate long-running production workloads
- Cover advanced service mesh integrations

## Architecture Outline

- Infrastructure scripts using kind/k3d, Helm, and kubectl
- TLS bootstrap with cert-manager and local CA
- Optional ArgoCD profile to demonstrate GitOps promotion

## Observability & Quality Gates

- Smoke tests verifying ingress endpoint availability and TLS
- Prometheus/Grafana stack capturing resource usage for the sample app

## Risks & Mitigations

- **Local environments drift across contributors** — Pin tool versions and provide automated bootstrap script
- **Ingress or TLS misconfiguration blocks demos** — Ship verification script and troubleshooting guide

## Delivery Plan

### Phase 1 – MVP
- Automate kind cluster creation and deploy hello service via Helm
- Document prerequisites and cleanup commands

### Phase 2 – Polish
- Integrate cert-manager-issued TLS and observability add-ons
- Add automated smoke tests and GitHub Actions workflow example

### Phase 3 – Stretch
- Demonstrate ArgoCD or Flux GitOps syncing the chart
- Enable multi-service overlay for future demos
