import React from "react";
import Proptypes from "prop-types";
import GlobalStyles from "../../theme/global";
import { ThemeProvider } from "styled-components";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {object} theme
 */
const ThemeProviderInjector = ({ theme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

ThemeProviderInjector.propTypes = {
    theme: Proptypes.object.isRequired,
    children: Proptypes.node.isRequired,
};

export default ThemeProviderInjector;
