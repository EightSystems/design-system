// Use your MDX content with this component.

import React from "react";
import components from "./components";
const MDX = require("@mdx-js/runtime");
const { MDXProvider } = require("@mdx-js/react");

const mdxComponents = {
    ...components,
};

// Add variables here if needed.
const scope = {};

// Children is a MDX string
const MdxContent = ({ children, style = {} }) => {
    return (
        <View style={style}>
            <MDXProvider components={mdxComponents} scope={scope}>
                <MDX>{children}</MDX>
            </MDXProvider>
        </View>
    );
};

export default MdxContent;
