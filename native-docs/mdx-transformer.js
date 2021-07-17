var semver = require("semver");
const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')
const path = require('path');
var resolveConfigDir = require("path-dirname");

var upstreamTransformer = null;

var reactNativeVersionString = require("react-native/package.json").version;
var reactNativeMinorVersion = semver(reactNativeVersionString).minor;

if (reactNativeMinorVersion >= 59) {
    upstreamTransformer = require("metro-react-native-babel-transformer");
} else if (reactNativeMinorVersion >= 56) {
    upstreamTransformer = require("metro/src/reactNativeTransformer");
} else if (reactNativeMinorVersion >= 52) {
    upstreamTransformer = require("metro/src/transformer");
} else if (reactNativeMinorVersion >= 47) {
    upstreamTransformer = require("metro-bundler/src/transformer");
} else if (reactNativeMinorVersion === 46) {
    upstreamTransformer = require("metro-bundler/build/transformer");
} else {
    // handle RN <= 0.45
    var oldUpstreamTransformer = require("react-native/packager/transformer");
    upstreamTransformer = {
        transform({ src, filename, options }) {
            return oldUpstreamTransformer.transform(src, filename, options);
        }
    };
}

const transform = (code, filename) => {
    return babel.transform(code, {
        plugins: [
            '@babel/plugin-transform-react-jsx',
            '@babel/plugin-proposal-object-rest-spread'
        ],
        filename
    }).code
}

const DEFAULT_RENDERER = `
import React from 'react'
import mdx from '${path.resolve(__dirname, 'src/markdown/components.js')}'
`

module.exports.transform = function(src, filename, options) {
    if (typeof src === "object") {
        // handle RN >= 0.46
        ({ src, filename, options } = src);
    }

    if (filename.endsWith(".md") || filename.endsWith(".mdx")) {
        const jsCode = mdx.sync(src);
        const code = transform(jsCode, filename)

        return upstreamTransformer.transform({
            src: `
            ${DEFAULT_RENDERER}

            ${code}
            `,
            filename,
            options
        });
    }

    return upstreamTransformer.transform({ src, filename, options });
};
