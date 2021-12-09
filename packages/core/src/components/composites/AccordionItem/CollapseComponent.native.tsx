import React, { useEffect, useState } from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import { Box } from "../../layout/Box";
import { CollapseComponentProps } from "./types";

export const CollapseComponent = ({ children, isOpened = false }: CollapseComponentProps) => {
    const [showView, setShowView] = useState<boolean>(isOpened);

    useEffect(() => {
        if (isOpened != showView) {
            if (Platform.OS === "android") {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }

            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            setShowView(isOpened);
        }
    }, [isOpened]);

    return <Box>{showView ? <Box>{children}</Box> : null}</Box>;
};
