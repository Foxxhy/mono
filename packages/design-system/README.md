# Design system (SCSS)

## Scripts

- `npm run dev` — compilation en continu vers `dist/design-system.css` (CSS développement + source maps).
- `npm run build` — build de production : CSS minifié dans `dist/design-system.css` (sans source map).

Le point d’entrée est [`src/index.scss`](src/index.scss) (`--load-path=src` pour les `@use`).
