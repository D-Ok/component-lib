import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import {babel} from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            external({ deps: true }),
            resolve({ extensions: ['.jsx', '.js', '.tsx', '.ts'] }),
            commonjs({
                include: 'node_modules/**',
            }),
            postcss(),
            babel({
                extensions: ['.jsx', '.js', '.tsx', 'ts'],
                exclude: 'node_modules/**'
            }),
            terser(),
            typescript({ tsconfig: './tsconfig.json' }),
        ],
    }
];