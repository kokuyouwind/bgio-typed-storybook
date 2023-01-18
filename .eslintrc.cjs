module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'standard-with-typescript', 'prettier', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/await-thenable': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};