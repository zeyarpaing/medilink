// eslint.config.js
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  {
    rules: {
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'line-length',
          order: 'desc',
          'always-on-top': ['id', 'name'],
          'partition-by-comment': 'Part:**',
        },
      ],
    },
    extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended', 'perfectionist'],
    plugins: {
      perfectionist,
    },
  },
];
