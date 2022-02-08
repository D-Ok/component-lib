import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import {babel} from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.js",
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
        external: [
            '@mui/material',
            'react',
            'react-dom'
        ],
        plugins: [
            external({ deps: true }),
            resolve({ extensions: ['.jsx', '.js', '.tsx', '.ts'] }),
            commonjs({
                include: 'node_modules/**',
            }),
            postcss(),
            babel({
                extensions: ['.jsx', '.js', '.tsx'],
                exclude: 'node_modules/**'
            }),
            terser(),
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [{file: "dist/index.js", format: "esm"}],
        external: [/\.css$/, '@mui/material', 'react', 'react-dom'],
    },
];