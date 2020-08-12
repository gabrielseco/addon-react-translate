import typescript from 'rollup-plugin-typescript2';
import multi from '@rollup/plugin-multi-entry';

import pkg from './package.json';

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      multi()
    ]
  },
  {
    input: 'src/register.tsx',
    output: [
      {
        file: 'dist/register.js',
        format: 'cjs'
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      multi()
    ]
  }
];
