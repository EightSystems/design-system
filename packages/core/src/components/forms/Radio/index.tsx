import React from "react";
import { useThemeColor } from "../../../hooks/useThemeColor";
import Box from "../../layout/Box";
import { FlexBox } from "../../layout/FlexBox";
import { Text } from "../../typography/Text";
import { Button } from "../Button";
import { CircleChecked } from "./styled";
import { RadioProps } from "./types";

export const Radio = ({
    checked = false,
    label = null,
    disabled = false,
    onPress = () => {},
    uncheckedColor = "gray",
    color = "success",
    name,
    fontSize = "xs",
    textColor = "black",
    justifyContent = "space-between",
    ...labelProps
}: RadioProps) => {
    const circleColor = useThemeColor(color);

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
                backgroundColor={"white"}
                borderColor={disabled ? "gray" : checked ? color : uncheckedColor}
                size="small"
                borderRadius="full"
                style={{ width: 20, height: 20, minHeight: 0 }}
                padded={false}
                fluid={false}
                onPress={onPress}
                testID={name}
                disabled={disabled}
            >
                {checked ? <CircleChecked color={circleColor} /> : null}
            </Button>
        </FlexBox>
    );
};

export default Radio;
