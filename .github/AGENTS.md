# AGENTS

## Project
- Next.js 16 with App Router under `app/`.
- Package manager: `pnpm@11.1.2` (use `pnpm`).

## Commands
- `pnpm dev` for local development.
- `pnpm build` for production build.
- `pnpm start` to run the production server.
- `pnpm lint` to run ESLint.

## Structure
- `app/` routes, layouts, and pages.
- `components/` UI by level: `atoms/`, `molecules/`, `organisms/`, `sections/`, `ui/`.
- `utils/sections/` content data for sections (prefer edits here over hardcoded copy).
- `public/` static assets (includes `stimulus/`).
- `styles/` and `app/globals.css` for global styles.

## Conventions
- Keep copy short and direct; titles should be 2-4 words.
- Visual changes should follow the design guide in [DESIGN.md](../DESIGN.md).
- For a new section, add a component in `components/sections/` and its data in `utils/sections/`.
- Prefer data-driven updates (section data files) over modifying layout components.
