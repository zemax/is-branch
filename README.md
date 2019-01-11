# is-git-branch

A node CLI tool to check the current git branch.

I use it in an npm script, before deploying with _git ftp_.


# Install

```bash
npm install is-git-branch
```

# Use

```bash
is-git-branch master && npm run deploy:production
```

```bash
is-git-branch preprod,master && npm run deploy:preproduction
```
