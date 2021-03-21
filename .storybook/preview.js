const {addDecorator} = require('@storybook/react')
const {withPropsTable} = require('storybook-addon-react-docgen')
const {withA11y} = require('@storybook/addon-a11y');

addDecorator(withPropsTable)
addDecorator(withA11y)
