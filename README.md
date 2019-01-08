# is-branch

A node CLI tool to check the current git branch.

I use it in an npm script, before deploying with _git ftp_.


# Install

```bash
npm install is-branch
```

# Use

```bash
is-branch master && npm run deloy:production
```

```bash
is-branch preprod,master && npm run deloy:preproduction
```
