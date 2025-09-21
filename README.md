# Foodeva Landing Page

Single-page marketing site for **Foodeva – AI & Business Automation Solutions** built with semantic HTML, modern CSS, and minimal JavaScript. Optimized for fast loads, accessibility, and responsive behavior.

## Preview locally

Open `index.html` directly in a browser or serve with a lightweight static server:

```bash
python -m http.server
```

Then visit `http://localhost:8000/`.

## Deploying

### GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, enable GitHub Pages from the `main` branch.
3. Optionally automate the publish step with a simple workflow:

```yaml
name: Deploy static site

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: .
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v1
```

### Vercel

1. Create a new project in Vercel and import the repository.
2. Leave the build command empty and set the output directory to `.` (project root).
3. Deploy.

### Netlify

1. Create a new site in Netlify and connect the repository.
2. Leave the build command blank; set the publish directory to `.`.
3. Deploy.

No build tooling or environment variables are required.
