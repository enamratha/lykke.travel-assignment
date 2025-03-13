import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    env: {
      browser: true,
      es2021: true,
    },
    parser: 'babel-eslint',
    extends: ['react-app', 'airbnb', 'prettier'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['prettier'],
    overrides: [
      {
        files: ['styledComponents.js'],
        rules: {
          'import/prefer-default-export': 'off',
        },
      },
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
      'react/state-in-constructor': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-console': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelAttributes: ['htmlFor'],
        },
      ],
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-noninteractive-element-interactions': [
        'off',
        {
          handlers: ['onClick'],
        },
      ],
      'react/prefer-stateless-function': [
        0,
        {
          ignorePureComponents: true,
        },
      ],
      'no-unused-vars': 'warn',
      'jsx-a11y/alt-text': 1,
      'react/no-unused-state': 'warn',
      'react/button-has-type': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'operator-assignment': ['warn', 'always'],
      radix: 'off',
    },
  },
]
