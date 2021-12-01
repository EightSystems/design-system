/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");
const fs = require("fs");
const { getDefaultConfig } = require("metro-config");
const metroResolver = require("metro-resolver");
const libs = require("node-libs-react-native");
libs["fs"] = require.resolve("react-native-level-fs");
libs["@storybook/addon-docs"] = path.resolve(__dirname, "src/storybook/blocks.tsx");
libs["@storybook/addon-actions"] = path.resolve(__dirname, "src/storybook/actions.tsx");

module.exports = async () => {
    const {
        resolver: { sourceExts, resolveRequest },
        watchFolders,
    } = await getDefaultConfig();

    const extraSourceExts = [...sourceExts, "mdx"];
    return {
        resolver: {
            nodeModulesPaths: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "../core/node_modules"),
            ],
            extraNodeModules: libs,
            sourceExts: extraSourceExts,
            resolveRequest: (context, realModuleName, platform, moduleName) => {
                if (moduleName.startsWith("../") && moduleName.endsWith("json")) {
                    const callingModuleDirectory = path.dirname(context.originModulePath);
                    const callingModuleResolvedPath = path.resolve(callingModuleDirectory, moduleName);

                    if (fs.existsSync(callingModuleResolvedPath)) {
                        return {
                            filePath: callingModuleResolvedPath,
                            type: "sourceFile",
                        };
                    }
                }

                if (moduleName.startsWith("../core")) {
                    for (var extIndex in extraSourceExts) {
                        let testPath = path.resolve(__dirname, `${moduleName}.${extraSourceExts[extIndex]}`);

                        if (fs.existsSync(testPath)) {
                            return {
                                filePath: testPath,
                                type: "sourceFile",
                            };
                        }
                    }
                }

                if (typeof libs[moduleName] != "undefined") {
                    return {
                        filePath: libs[moduleName],
                        type: "sourceFile",
                    };
                }

                return metroResolver.resolve(
                    {
                        ...context,
                        resolveRequest: null,
                    },
                    moduleName,
                    platform
                );
            },
        },
        transformer: {
            babelTransformerPath: path.resolve(__dirname, "mdx-transformer.js"),
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true,
                },
            }),
        },
        watchFolders: [path.resolve(__dirname), path.resolve(__dirname, "../core")],
    };
};
