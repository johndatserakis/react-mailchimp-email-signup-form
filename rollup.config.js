import analyze from 'rollup-plugin-analyzer';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

const extensions = ['.ts', '.tsx'];
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default {
  input: 'src/index.ts',
  external,
  output: [
    {
      dir: 'dist/commonjs',
      format: 'cjs',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'auto',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    postcss({
      extract: 'dist/css/react-mailchimp-email-signup-form.css',
    }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      include: ['src/**/*'],
    }),
    // Allow final css to be saved as a single file at ./dist/css/...
    // This is due to a limitiation in the latest version of postcss
    // https://github.com/egoist/rollup-plugin-postcss/issues/250
    copy({
      targets: [{ src: 'dist/esm/dist/css/*', dest: 'dist/css' }],
      hook: 'writeBundle',
    }),
    visualizer(),
    analyze(),
  ],
};
