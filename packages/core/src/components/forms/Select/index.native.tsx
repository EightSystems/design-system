let MenuView = null;
try {
    MenuView = require("@react-native-menu/menu").MenuView;
} catch (e) {}

import keys from "lodash/keys";
import values from "lodash/values";
import React, { useEffect, useMemo, useState } from "react";
import { onlyText } from "react-children-utilities";
import { Icon } from "../../primitives/Icon";
import { useColorScheme } from "react-native";
import * as S from "./styled.native";
import { OptionElement, SelectProps } from "./types";
import { Text } from "../../typography/Text";
import { useThemeColor } from "../../../native";

export { Option } from "./Option.native";

export const Select = ({
    onChange,
    onBlur,
    onFocus,
    hideValidationContainer = false,
    validationError,
    validationSuccess,
    validationMessage,
    children,
    placeholder,
    label = null,
    optionsCancelMessage,
    value,
    borderRadius = "sm",
    borderPosition = "all",
    borderType = "default",
    borderColor = "darkTint",

    backgroundColor = "white",
    textColor = "dark",
    menuTextColor = "black",
}: SelectProps) => {
    if (!MenuView) {
        return <Text>You need to install @react-native-menu/menu package</Text>;
    }

    const menuTextColorTranslated = useThemeColor(menuTextColor);

    const { optionListReduced, optionList, optionValueList } = useMemo(() => {
        const childMapped = React.Children.map(children, (child: OptionElement) => {
            return {
                value: child.props.value,
                text: onlyText(child.props.children),
            };
        });

        const childReduced = childMapped
            ? childMapped.reduce<any>((previousValue, currentValue) => {
                  previousValue[currentValue.value] = currentValue.text;
                  return previousValue;
              }, {})
            : {};

        return {
            optionListMapped: childMapped,
            optionListReduced: childReduced,
            optionList: values(childReduced),
            optionValueList: keys(childReduced),
        };
    }, [children]);

    const borderFinalColor = validationError ? "danger" : validationSuccess ? "success" : borderColor;

    const [selectedOptionName, setSelectedOptionName] = useState(
        placeholder ||
            (value && value in optionValueList
                ? optionListReduced[value]
                : optionList.length > 0
                ? optionList[0]
                : "-- Empty Options --")
    );

    const [selectedOptionValue, setSelectedOptionValue] = useState(
        placeholder
            ? ""
            : value && value in optionValueList
            ? value
            : optionValueList.length > 0
            ? optionValueList[0]
            : ""
    );

    useEffect(() => {
        if (value !== selectedOptionValue) {
            if (value in optionValueList) {
                setSelectedOptionValue(value);
                setSelectedOptionName(optionListReduced[value]);
            }
        }
    }, [value]);

    useEffect(() => {
        setSelectedOptionName(
            placeholder ||
                (value && value in optionValueList
                    ? optionListReduced[value]
                    : optionList.length > 0
                    ? optionList[0]
                    : "-- Empty Options --")
        );

        setSelectedOptionValue(
            placeholder
                ? ""
                : value && value in optionValueList
                ? value
                : optionValueList.length > 0
                ? optionValueList[0]
                : ""
        );
    }, [optionValueList, placeholder]);

    return (
        <S.MainWrapper>
            {label ? (
                <S.InputLabel fontFace={"secondary"} fontWeight={"medium"} textColor={"dark"} fontSize={"xxs"}>
                    {label}
                </S.InputLabel>
            ) : null}

            <MenuView
                actions={[...optionList, optionsCancelMessage || "Cancel"].map((value, index) => {
                    return {
                        id: `${index}`,
                        title: value,
                        titleColor: menuTextColorTranslated,
                        attributes: {
                            destructive: index == optionList.length,
                        },
                    };
                })}
                isAnchoredToRight={true}
                onPressAction={({ nativeEvent }) => {
                    const selectedIndex = +nativeEvent.event;

                    if (selectedIndex < optionList.length) {
                        setSelectedOptionName(optionList[selectedIndex]);
                        setSelectedOptionValue(optionValueList[selectedIndex]);
                        onChange && onChange(optionValueList[selectedIndex]);
                    }

                    onBlur && onBlur();
                }}
            >
                <S.SelectComponent
                    borderColor={borderFinalColor}
                    borderType={borderType}
                    borderRadius={borderRadius}
                    borderPosition={borderPosition}
                    backgroundColor={backgroundColor}
                    fontFace={"secondary"}
                    fontWeight={"medium"}
                    textColor={textColor}
                    textAlign={"left"}
                    endIcon={<Icon familyName={"FontAwesome"} icon={"chevron-down"} size={"sm"} />}
                >
                    {selectedOptionName}
                </S.SelectComponent>
            </MenuView>
            {!hideValidationContainer || validationMessage ? (
                <S.InputValidationContainer>
                    {validationMessage ? (
                        <React.Fragment>
                            <S.InputValidationIcon familyName={"Material"} icon={"info"} color={"danger"} />
                            <S.InputValidationMessage fontFace={"primary"} textColor={"danger"} fontSize={"xxs"}>
                                {validationMessage}
                            </S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            ) : null}
        </S.MainWrapper>
    );
};

export default Select;
