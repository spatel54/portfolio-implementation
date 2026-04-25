# Git remotes

After bootstrap, `origin` was renamed to **`upstream`** (Malay146/UIArchives).

Add your GitHub repository:

```bash
git remote add origin https://github.com/<you>/<your-repo>.git
git push -u origin main
```

Replace URL and branch as needed. Pull upstream updates with:

```bash
git fetch upstream
```
