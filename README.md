<<<<<<< HEAD
# GoClone

GoClone is a self-contained, responsive editorial agency and portfolio experience built from the Lovable TanStack Start/Vite/React/TypeScript scaffold and refined against the authorized Fuel reference at <https://fuel.framer.website/>.

## Development

Install dependencies with pnpm and start the local server:

```sh
pnpm install
pnpm run dev
```

The app exposes these routes:

| Route | Content |
|---|---|
| `/` | Full long-form home experience |
| `/work/portfolio` | Portfolio overview and project cards |
| `/about` | Studio process and metrics |
| `/contact` | Contact CTA, FAQ, and footer |

Run the production checks with:

```sh
pnpm run build
pnpm run lint
```

The build is static with no required environment variables. All visual assets used at runtime are local under `public/assets/`; `.env.example` is included as the safe configuration reference.

See `architecture_blueprint.md`, `design_decisions.md`, and `verification_report.md` for the implementation boundary, visual decisions, and latest QA evidence.
