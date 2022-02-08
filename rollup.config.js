import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel  } from '@rollup/plugin-babel';
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
                external: ['@emotion/styled', '@emotion/react'],
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                external: ['@emotion/styled', '@emotion/react'],
            },
        ],
        plugins: [
            resolve(),
            commonjs({
                include: 'node_modules/**'
            }),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
                presets: ['@babel/preset-env', '@babel/preset-react']
            }),
            postcss(),
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [{file: "dist/index.js", format: "esm"}],
        external: [/\.css$/],
    },
];