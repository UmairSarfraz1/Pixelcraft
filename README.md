# PixelCraft Studio

A beginner-friendly multi-page creative agency website built with standalone Angular components, Angular Router, TypeScript, and regular CSS. The content is static; the contact form validates and displays a local confirmation without sending or storing information.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`. Angular rebuilds the app when source files change.

## Build

```bash
npm run build
```

The production files are written to `dist/pixelcraft-studio/`.

## Project layout

```text
src/app/
  components/       Shared navbar and footer
  pages/            Home, About, Services, Portfolio, Contact, and 404
  services/         Static services, projects, team, and testimonial data
  app.routes.ts     Page routes and wildcard 404 route
  app.ts            Root layout
```

The pages use Angular's `@for` and `@if` template syntax, router links, and data binding. The portfolio filter is local component state, and the contact form uses Angular template-driven validation.
