// Use your MDX content with this component.

import React from 'react'
const MDX = require('@mdx-js/runtime')
const {MDXProvider} = require('@mdx-js/react')
import components from './components'

const mdxComponents = {
    ...components
}

// Add variables here if needed.
const scope = {}

// Children is an MDX string
const MdxContent = ({ children, style = {} }) => {
    return (
        <View style={style}>
            <MDXProvider components={mdxComponents} scope={scope}>
                <MDX>
                    {children}
                </MDX>
            </MDXProvider>
        </View>
    )
}

export default MdxContent
