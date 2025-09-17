# HTML + CSS Starter (Vite + Sass)

## Como usar
1. Instale o Node.js LTS.
2. No terminal, dentro da pasta do projeto:
   ```bash
   npm install
   npm run dev
   ```
3. Para build de produção:
   ```bash
   npm run build && npm run preview
   ```

## Scripts
- `npm run dev` – servidor local com Vite (hot reload).
- `npm run build` – build otimizado.
- `npm run preview` – serve o build.
- `npm run lint:css` – analisa SCSS com Stylelint.
- `npm run format` – formata com Prettier.

## Estrutura
```
.
├── index.html
├── package.json
├── postcss.config.js
├── vite.config.js
├── .editorconfig
├── .prettierrc
├── .stylelintrc.json
├── .vscode/
│   ├── settings.json
│   └── extensions.json
└── src/
    ├── scripts/main.js
    └── styles/main.scss
```
