import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const restrictedDesignLibraryMessage =
  'Do not import directly from react-aria-components outside components. Using third-party design libraries directly removes an abstraction layer, making future maintenance and refactoring more difficult. Instead, create a reusable component in the app/lib/components folder and use it throughout the application to ensure consistency and flexibility.';

const restrictedDesignLibraries = [
  'react-aria-components',
  '@mui',
  '@mantine',
  'react-bootstrap',
  'shadcn-ui',
  '@chakra-ui',
  'antd',
];

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': 'allow-with-description',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      'max-depth': ['warn', 3],
      'max-lines': ['warn', 150],
      'no-case-declarations': 'error',
      'no-empty': 'off',
      'no-unneeded-ternary': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.module.scss.d.ts'],
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['!app/lib/components/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: restrictedDesignLibraries.map(library => ({
            name: library,
            message: restrictedDesignLibraryMessage,
          })),
          patterns: restrictedDesignLibraries.map(library => ({
            group: [`${library}/*`],
            message: restrictedDesignLibraryMessage,
          })),
        },
      ],
    },
  },
];

export default eslintConfig;
