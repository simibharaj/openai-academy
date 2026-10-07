# AGENTS Guidelines for This Repository

## Project summary

This repository is a Next.js Pages Router site used for Codex collaboration
exercises. Prefer small, reviewable diffs and fast iteration through the development
server so changes are easy to inspect and verify.

## Key entrypoints

- `pages/index.tsx` composes the home page and supplies its static props.
- `pages/_app.tsx` applies global application setup, metadata, and navigation.
- `components/` contains the reusable sections and UI elements used by the pages.
- `styles/globals.css` contains global styles, theme variables, fonts, and shared
  animations.

Prefer TypeScript (`.tsx` and `.ts`) for new components and utilities. Co-locate
component-specific styles with their component when practical.

## Development workflow

1. If the existing dependencies are missing, install them from the lockfile:

   ```bash
   pnpm install --frozen-lockfile
   ```

2. Start the Next.js development server with hot reload:

   ```bash
   pnpm dev
   ```

Use the development server for iterative changes and restart it when dependencies
change.

## Validation workflow

Run both repository checks before considering a change complete:

```bash
pnpm lint
pnpm typecheck
```

## Guardrails

- Use `pnpm dev` for iterative work and preserve hot module replacement.
- Do not run `pnpm build` during interactive work; production assets in `.next` can
  disrupt the active development server and hot reload.
- Keep diffs scoped to the requested task and avoid unrelated cleanup.
- If dependencies change, update `pnpm-lock.yaml` alongside `package.json` and restart
  the development server.

## Definition of done

- `pnpm lint` passes.
- `pnpm typecheck` passes.
- Manual smoke checks are completed and documented, including the pages or flows
  checked and their results.
- A concise PR summary and test plan are ready for review.
