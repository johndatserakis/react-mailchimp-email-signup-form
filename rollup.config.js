import analyze from 'rollup-plugin-analyzer';
import autoprefixer from "autoprefixer";
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
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
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true
    }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      include: ['src/**/*'],
    }),
    visualizer(),
    analyze(),
  ],
};
