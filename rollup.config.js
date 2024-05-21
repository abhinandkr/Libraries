// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

export default {
		input: 'src/libraries.ts',
		output: [
				{
						file: 'dist/bundle.cjs.js',
						format: 'cjs',
						sourcemap: true,
				},
				{
						file: 'dist/bundle.esm.js',
						format: 'esm',
						sourcemap: true,
				},
		],
		plugins: [
				typescript({
						tsconfig: './tsconfig.json', // Make sure the path to tsconfig.json is correct
				}),
				resolve(),
				commonjs(),
				terser(),
		],
};
