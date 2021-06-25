import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";

export default {
    input: ["src/**/*.js"],
    output: [
        {
            dir: "dist",
            format: "cjs",
            exports: "named",
            sourcemap: true,
            preserveModules: false,
            preserveModulesRoot: "src",
        },
    ],
    plugins: [
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
        typescript({
            tsconfig: "./tsconfig.json",
            abortOnError: false,
            clean: true,
            include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
            exclude: ["node_modules/**"],
        }),
        commonjs(),
    ],
};
