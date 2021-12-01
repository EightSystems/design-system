import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import multiInput from "rollup-plugin-multi-input";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const webInput = ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx", "src/**/*.jsx"];

const outputOptions = {
    format: "cjs",
    exports: "named",
    sourcemap: true,
    //preserveModules: true,
    //preserveModulesRoot: "src",
};

const defaultPlugins = [
    multiInput({
        relative: "src/",
    }),
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
            exclude: ["node_modules/**", "dist", "rollup.config.js"],
        }),
        ...defaultPlugins,
    ],
};

export default [webConfig];
