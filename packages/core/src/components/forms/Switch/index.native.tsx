import React, { useEffect, useState } from "react";
import Box from "../../layout/Box";
import { FlexBox } from "../../layout/FlexBox";
import { Text } from "../../typography/Text";
import { SwitchProps } from "./types";
import { Switch as SwitchNative } from "react-native";
import { useThemeColor } from "../../../hooks/useThemeColor";
import { Platform } from "../../../utils/Platform";

export const Switch = ({
    checked = false,
    indeterminate = false,
    label = null,
    disabled = false,
    onValueChange = () => {},
    uncheckedColor = "light",
    color = "success",
    trackColor = "gray",
    name,
    fontSize = "xs",
    textColor = "black",
    justifyContent = "space-between",
    ...labelProps
}: SwitchProps) => {
    const [isSelected, setIsSelected] = useState(checked);

    const trackColorConverted = useThemeColor(isSelected ? color : trackColor);
    const thumbColor = useThemeColor(Platform.OS == "ios" ? "white" : isSelected ? color : uncheckedColor);

    useEffect(() => {
        if (checked != isSelected) {
            setIsSelected(checked);
        }
    }, [checked]);

    const handleSwitchChange = () => {
        if (!disabled) {
            setIsSelected(!isSelected);

            if (onValueChange) {
                onValueChange();
            }
        }
    };

    return (
        <FlexBox alignItems="center" justifyContent={justifyContent}>
            {label ? (
                <Box padding="xxs" paddingDirection="horizontal" onPress={handleSwitchChange}>
                    <Text fontSize={fontSize} textColor={textColor} {...labelProps}>
                        {label}
                    </Text>
                </Box>
            ) : null}

            <SwitchNative
                value={isSelected}
                onValueChange={handleSwitchChange}
                disabled={disabled}
                trackColor={{
                    false: trackColorConverted,
                    true: trackColorConverted,
                }}
                thumbColor={thumbColor}
            />
        </FlexBox>
    );
};

export default Switch;
