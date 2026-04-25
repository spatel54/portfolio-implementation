# Git remotes

Configured remotes:

- **`upstream`** — [Malay146/UIArchives](https://github.com/Malay146/UIArchives) (pull fixes here).
- **`origin`** — [spatel54/portfolio-implementation](https://github.com/spatel54/portfolio-implementation) (your pushes).

Pull upstream updates:

```bash
git fetch upstream
# merge or rebase as you prefer, e.g.:
# git merge upstream/main
```

History was **unshallowed** once so `git push` to GitHub succeeds (shallow-only clones can fail on push).
