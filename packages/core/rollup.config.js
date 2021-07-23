// import typescript from "rollup-plugin-typescript2";
// import commonjs from "@rollup/plugin-commonjs";
// import external from "rollup-plugin-peer-deps-external";
// import postcss from "rollup-plugin-postcss";
// import resolve from "@rollup/plugin-node-resolve";
// import url from "@rollup/plugin-url";
// import svgr from "@svgr/rollup";
// import json from "@rollup/plugin-json";
// import multiInput from "rollup-plugin-multi-input";
//
// export default {
//     input: ["src/**/*.js"],
//     output: [
//         {
//             dir: "dist",
//             format: "cjs",
//             exports: "named",
//             sourcemap: true,
//             preserveModules: false,
//             preserveModulesRoot: "src",
//         },
//     ],
//     plugins: [
//         multiInput(),
//         external(),
//         postcss({
//             modules: true,
//         }),
//         url(),
//         svgr({
//             svgoConfig: {
//                 plugins: {
//                     removeViewBox: false,
//                 },
//             },
//         }),
//         json(),
//         resolve(),
//         typescript({
//             tsconfig: "./tsconfig.json",
//             abortOnError: false,
//             clean: true,
//             include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
//             exclude: ["node_modules/**"],
//         }),
//         commonjs(),
//     ],
// };
//
// Gonna test a new configuration pattern that allows me to produce sepeare bundles for native and non-native components
//

import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";
import multiInput from "rollup-plugin-multi-input";

const webInput = "./src/web/index.js";
const nativeInput = "./src/native/index.js";

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
];

const webConfig = {
    input: webInput,
    output: [
        {
            dir: "dist",
            ...outputOptions,
        },
        ,
    ],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
            abortOnError: false,
            clean: true,
            include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
            exclude: ["node_modules/**"],
            tsconfigOverride: {
                compilerOptions: {
                    jsx: "react",
                },
                include: ["./src/assets", "./src/web", "./src/hooks", "./src/styles", "./src/utils"],
            },
        }),
        commonjs(),
        ...defaultPlugins,
    ],
};

const nativeConfig = {
    input: nativeInput,
    output: [
        {
            dir: "mobile",
            ...outputOptions,
        },
    ],
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json",
            abortOnError: false,
            clean: true,
            include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
            exclude: ["node_modules/**"],
            tsconfigOverride: {
                compilerOptions: {
                    module: "ES2015",
                    jsx: "react",
                },
                include: ["./src/assets", "./src/native", "./src/hooks", "./src/styles", "./src/utils"],
            },
        }),
        commonjs(),
        ...defaultPlugins,
    ],
};

export default [webConfig, nativeConfig];
