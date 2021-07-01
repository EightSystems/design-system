import React from "react";

export const isValidReactElement = (props, propName, componentName) => {
    if (!React.isValidElement(props[propName])) {
        return new Error(
            `@8sistemas/design-system: Invalid prop ${propName} passed to ${componentName}. Expected the prop ${propName} to be a React element. Consider writing a functional component that returns a valid React element.` +
                "See: https://reactjs.org/docs/rendering-elements.html"
        );
    }

    return null;
};
