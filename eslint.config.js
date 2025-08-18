// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier' // <- desativa regras que conflitam com Prettier

export default tseslint.config([
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // Mantém por último: garante que regras de estilo do ESLint não
      // briguem com o Prettier
      eslintConfigPrettier,
    ],
    rules: {
      // Suas regras adicionais aqui, se quiser
      // Ex.: 'react-refresh/only-export-components': 'off',
    },
  },
])
