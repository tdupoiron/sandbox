```
  ███████╗ █████╗ ███╗   ██╗██████╗ ██████╗  ██████╗ ██╗  ██╗
  ██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔═══██╗╚██╗██╔╝
  ███████╗███████║██╔██╗ ██║██║  ██║██████╔╝██║   ██║ ╚███╔╝ 
  ╚════██║██╔══██║██║╚██╗██║██║  ██║██╔══██╗██║   ██║ ██╔██╗ 
  ███████║██║  ██║██║ ╚████║██████╔╝██████╔╝╚██████╔╝██╔╝ ██╗
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
```

<div align="center">

**A playground for GitHub Actions, containers, and deployment experiments.**

[![Deploy to Azure](https://github.com/tdupoiron/sandbox/actions/workflows/deploy.yml/badge.svg?branch=develop&event=pull_request)](https://github.com/tdupoiron/sandbox/actions/workflows/deploy.yml)

</div>

---

## ▚ Overview

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   .github/workflows/  ──▶  CI/CD pipelines & automation     │
│   docker/             ──▶  Container build definitions      │
│   .devcontainer/      ──▶  Reproducible dev environment     │
│   markdown/           ──▶  Scratch notes & docs             │
│   index.html          ──▶  Static demo page                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## ▚ Workflows

| Workflow | Purpose |
| :--- | :--- |
| `deploy.yml` | Deploy to Azure |
| `docker.yml` | Build & publish container images |
| `static.yml` | Publish the static site |
| `arm.yml` | ARM template provisioning |
| `calculator.yml` | Demo job with inputs |
| `demo-script.yml` | Scripted step demo |
| `demo-workflow-dispatch.yml` | Manual dispatch demo |

## ▚ Getting started

```console
$ git clone https://github.com/tdupoiron/sandbox.git
$ cd sandbox
$ npm install
```

Open the folder in a Dev Container for a preconfigured environment, or build
the image directly:

```console
$ docker build -f docker/Dockerfile -t sandbox .
$ docker run --rm -p 8080:80 sandbox
```

## ▚ Status

```
  [ ✔ ] workflows        [ ✔ ] container      [ ✔ ] dev container
  [ ~ ] tests            [ ~ ] docs           [ ~ ] deploy targets
```

<div align="center">
<sub>◈ built for experimenting ◈</sub>
</div>
