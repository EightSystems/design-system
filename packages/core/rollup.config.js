import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";

const webInput = "./src/index.ts";

const outputOptions = {
    format: "cjs",
    exports: "named",
    sourcemap: true,
    preserveModules: false,
    preserveModulesRoot: "src",
};

const defaultPlugins = [
    multiInput(),
    external(),
    postcss({
        modules: true,
    }),
    url(),
    svgr({
        svgoConfig: {
            plugins: {
                removeViewBox: false,
            },
        },
    }),
    json(),
    resolve(),
    commonjs(),
];

const webConfig = {
    input: webInput,
    output: [
        {
            dir: "dist",
            ...outputOptions,
        },
    ],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
            abortOnError: false,
            clean: true,
            include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
            exclude: [
                "node_modules/**",
                "dist",
                "rollup.config.js",
                "native.js",
                "*.native.js(|x)",
                "*.native.ts(|x)",
                "**/*.native.js(|x)",
                "**/*.native.ts(|x)",
            ],
        }),
        ...defaultPlugins,
    ],
};

export default [webConfig];
