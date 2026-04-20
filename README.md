# App Support Site

GitHub Pages site hosting support and legal pages for mobile apps.

## Structure

```
index.html              ← landing page listing all apps
<app-slug>/
  index.html            ← support & contact page
  privacy.html          ← privacy policy
  terms.html            ← terms of service
```

## Apps

| App | Folder |
|-----|--------|
| Bite of Balance | `bite-of-balance/` |

## Adding a new app

1. Copy the `bite-of-balance/` folder and rename it to your app's slug (e.g. `my-new-app/`).
2. Update the `<title>`, heading, and all text in the three HTML files.
3. Replace contact email and company placeholders (`[Your Company Name]`, `[Your Address]`, etc.).
4. Add a link to the new app in `index.html` inside the `<ul class="app-list">`.
5. Commit and push — GitHub Pages deploys automatically from the root of `main`.

## GitHub Pages setup

In the repo settings → Pages → Source: **Deploy from branch** → Branch: `main` → Folder: `/ (root)`.
