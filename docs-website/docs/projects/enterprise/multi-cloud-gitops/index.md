---
id: multi-cloud-gitops
title: Enterprise – Multi-cloud GitOps
description: GitOps reference deploying applications across EKS, GKE, and AKS.
displayed_sidebar: enterpriseProjectsSidebar
tags:
  - enterprise
  - gitops
  - multi-cloud
---

# Context

Provide a blueprint for consistent application deployment and failover across multiple cloud providers.

## Objectives

### Must
- Automate provisioning of EKS, GKE, and AKS clusters with Terraform or Crossplane
- Configure ArgoCD or Flux pipelines promoting changes across environments
- Implement traffic management and failover between regions

### Should
- Provide cost and capacity dashboards per cluster
- Support secrets management via External Secrets and KMS

### Won't
- Cover every cloud service integration exhaustively
- Provide continuous cost optimization tooling beyond guidance

## Architecture Outline

- Terraform modules per cloud provider orchestrated by Crossplane or pipelines
- GitOps controllers syncing Helm charts across clusters with environment overlays
- Service mesh (Istio or Linkerd) managing cross-cluster traffic policies

## Observability & Quality Gates

- Global dashboards reporting cluster health, sync status, and traffic distribution
- Alerting for drift, failed syncs, and failover events

## Risks & Mitigations

- **Cross-cloud drift causes inconsistent deployments** — Use policy enforcement, pipelines, and automated drift detection
- **Failover misconfiguration leads to downtime** — Run game days and automated simulations to verify failover paths

## Delivery Plan

### Phase 1 – MVP
- Provision baseline clusters and GitOps controllers with sample app
- Establish promotion workflow and document runbooks

### Phase 2 – Polish
- Add traffic management, secrets syncing, and monitoring dashboards
- Automate cost reporting and capacity planning signals

### Phase 3 – Stretch
- Implement active-active routing and chaos engineering suite
- Integrate policy-as-code for compliance across clouds
