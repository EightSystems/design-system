import React from "react";
import Box from "../../layout/Box";
import { FlexBox } from "../../layout/FlexBox";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import { Button } from "../Button";
import { CheckBoxProps } from "./types";

export const CheckBox = ({
    checked = false,
    indeterminate = false,
    label = null,
    disabled = false,
    onPress = () => {},
    uncheckedColor = "white",
    color = "success",
    name,
    fontSize = "xs",
    iconColor = "black",
    textColor = "black",
    justifyContent = "space-between",
    ...labelProps
}: CheckBoxProps) => {
    const iconName = indeterminate ? "fa-minus" : checked ? "fa-check" : null;

    return (
        <FlexBox alignItems="center" justifyContent={justifyContent}>
            {label ? (
                <Box padding="xxs" paddingDirection="horizontal" onPress={!disabled ? onPress : null}>
                    <Text fontSize={fontSize} textColor={textColor} {...labelProps}>
                        {label}
                    </Text>
                </Box>
            ) : null}

            <Button
                backgroundColor={disabled ? "gray" : indeterminate ? "gray" : checked ? color : uncheckedColor}
                borderColor={disabled ? "gray" : indeterminate ? "gray" : checked ? color : "primary"}
                size="small"
                style={{ width: 18, height: 18, minHeight: 0 }}
                padded={false}
                fluid={false}
                onPress={onPress}
                testID={name}
                disabled={disabled}
            >
                {iconName ? <Icon familyName="FontAwesome" icon={iconName} size="xxxs" color={iconColor} /> : null}
            </Button>
        </FlexBox>
    );
};

export default CheckBox;
