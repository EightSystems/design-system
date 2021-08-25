import React from "react";
import { View } from "react-native";

export const Meta = props => {
    return null;
};

export const Story = ({ name, args, children }) => {
    if (React.isValidElement(children)) {
        return children;
    }

    return children(args);
};

export const Canvas = ({ children }) => {
    return <View>{children}</View>;
};

export const Description = props => {
    return null;
};

export const ArgsTable = props => {
    return null;
};
