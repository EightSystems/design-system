import React from "react";
import GlobalStyles from "../../styles/global";

const GlobalInjector = props => {
    return <GlobalStyles {...props} />;
};

export { default as GlobalStyles } from "../../styles/global";
export default GlobalInjector;
