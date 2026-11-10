// vp migrate: merged .oxlintrc.json (d7c724ba4f5282ac97b4371a4e75ab0b).
import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    semi: false,
    singleQuote: true,
    proseWrap: 'always',
    embeddedLanguageFormatting: 'off',
    ignorePatterns: [
      '.claude/**',
      'bench/.corpus/**',
      'bench/out/**',
      'bench/node_modules/**',
      'bench/synthetic/**',
      'bench/baseline/**',
      'bench/package-lock.json',
    ],
  },
  lint: {
    plugins: ['typescript', 'unicorn'],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
    },
    overrides: [
      {
        files: ['packages/oxlint-tailwindcss/src/**/*.ts'],
        rules: {
          'typescript/no-floating-promises': 'error',
          'typescript/no-misused-promises': 'error',
          'typescript/await-thenable': 'error',
          'typescript/no-for-in-array': 'error',
        },
      },
    ],
    ignorePatterns: [
      'bench/.corpus/**',
      'bench/out/**',
      'bench/node_modules/**',
      'bench/synthetic/**',
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
  },
})
