# Design system (SCSS / CSS)

Bibliothèque de styles **sans JavaScript** : **design tokens** sur `:root`, **reset** global, **classes utilitaires** (`u-*`) et **composants UI** (boutons, formulaires, navigation, etc.). Le CSS est compilé depuis du SCSS ; vous pouvez consommer le fichier buildé ou les sources pour les intégrer dans votre propre chaîne Sass.

## Installation

```bash
npm install foxxhy-mono
```

Si le nom du paquet change (par ex. scope `@votre-org/...`), adaptez la commande en conséquence.

## Utilisation du CSS compilé

Le champ `style` du `package.json` pointe vers `dist/design-system.css`. Importez ce fichier selon votre outil :

- **Bundlers** (Vite, Webpack, etc.) : `import 'foxxhy-mono/dist/design-system.css'` (ajustez le nom du paquet si besoin).
- **HTML** : lien direct vers `node_modules/foxxhy-mono/dist/design-system.css` (ou copie du fichier dans vos assets).

Puis utilisez les classes documentées dans les partiels sous `src/components/` (même nommage en CSS compilé).

## Utilisation des icônes

Le build publie aussi un sprite SVG dans `dist/icons.svg`. Il ne contient pas de JavaScript et se consomme avec les classes CSS du design system :

```html
<svg class="icon icon-base" aria-hidden="true" role="presentation">
  <use href="/node_modules/foxxhy-mono/dist/icons.svg#activity"></use>
</svg>
```

Pour une icône informative, donnez-lui un nom accessible :

```html
<svg class="icon icon-base icon-color-info" role="img" aria-label="Information">
  <use href="/node_modules/foxxhy-mono/dist/icons.svg#info"></use>
</svg>
```

## Utilisation des sources SCSS

Dans un projet qui compile déjà le Sass, vous pouvez :

- Importer l’entrée complète (tous les tokens, reset, utilitaires et composants) :

```scss
@use 'path/to/node_modules/foxxhy-mono/src/index.scss';
```

- Importer des partiels ciblés avec un **load path** sur le dossier `src` du paquet, par exemple :

```scss
@use 'fondation/token' as *;
@use 'components/button';
```

Les chemins exacts dépendent de la configuration `--load-path` / `includePaths` de votre compilateur.

## Scripts (développement du paquet)

| Script | Rôle |
|--------|------|
| `npm run dev` | Compilation en continu vers `dist/design-system.css` (CSS développement + source maps). |
| `npm run build` | Build de production : CSS minifié dans `dist/design-system.css` (sans source map) et sprite `dist/icons.svg`. |
| `npm run lint` | Stylelint sur `src/**/*.scss`. |
| `npm run lint-fix` | Stylelint avec corrections automatiques. |
| `npm run publish` | **Préparation locale** : `lint-fix` puis `build`. Ne remplace pas `npm publish` sur le registre npm. |

Le point d’entrée source est [`src/index.scss`](src/index.scss) ; la compilation utilise `--load-path=src` pour les `@use`.

## Personnalisation et thème

Les variables sont définies dans [`src/fondation/token.scss`](src/fondation/token.scss) sur `:root`. Vous pouvez les **surcharger** après l’import du CSS ou dans votre propre feuille, par exemple pour un thème sombre :

- **`--color-bg`**, **`--color-text`** — fond et texte par défaut du `body` (voir [`src/base/reset.scss`](src/base/reset.scss)).
- **`--color-focus`** — contour des éléments en `:focus-visible` (reset global).
- Palettes **`--color-neutral-*`**, **`--color-primary-*`**, couleurs sémantiques, **`--spacing-*`**, typo, **`--shadow-*`**, **`--z-index-*`**, **`--motion-*`**, etc.

Les composants et utilitaires s’appuient sur ces custom properties : une surcharge cohérente sur `:root` ou `.theme-dark` permet d’adapter l’UI sans fork du SCSS.

## Structure du dossier `src`

| Dossier | Contenu |
|---------|---------|
| `fondation/` | Tokens (`token.scss`). |
| `base/` | Reset global. |
| `utilities/` | Utilitaires couleur, espacement, flex, position (préfixe `u-`). |
| `components/` | Styles par composant (alert, badge, breadcrumb, button, card, checkbox, divider, footer, header, icon, input, link, modal, radio, select, spinner, table, toast, toggle, typo). |

## Contraintes

- **Bundle monolithique** : l’entrée `index.scss` agrège l’ensemble du système ; pour un périmètre minimal, importez des partiels SCSS individuels.
- **Navigateurs** : certaines règles utilisent **`:has()`** ; viser des navigateurs récents pour les formulaires (checkbox, radio, toggle).
- **Tableau** : la zone d’actions peut combiner les classes du composant avec les utilitaires flex (ex. `.u-flex`) ; gardez les utilitaires si vous importez uniquement des partiels ciblés.

## Licence

Le dépôt parent est sous licence **Apache 2.0** (fichier `LICENSE` à la racine du monorepo). Vérifiez les obligations de mention et de notice pour votre usage.
