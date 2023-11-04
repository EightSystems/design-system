let MenuView = null;
try {
    MenuView = require("@react-native-menu/menu").MenuView;
} catch (e) {}

import keys from "lodash/keys";
import values from "lodash/values";
import React, { useEffect, useMemo, useState } from "react";
import { onlyText } from "react-children-utilities";
import { useThemeColor } from "../../../native";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import * as S from "./styled.native";
import { OptionElement, SelectProps } from "./types";

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

    const valueAsString: string | null = value ? `${value}` : null;

    const menuTextColorTranslated = useThemeColor(menuTextColor);

    const { optionListReduced, optionList, optionValueList } = useMemo(() => {
        const childMapped = React.Children.map(children, (child: OptionElement): { value: string; text: string } => {
            return {
                value: `${child.props.value}`,
                text: onlyText(child.props.children),
            };
        });

        const childReduced = childMapped
            ? childMapped.reduce<{ [key: string]: string }>((previousValue, currentValue) => {
                  previousValue[currentValue.value] = currentValue.text;
                  return previousValue;
              }, {})
            : {};

        return {
            optionListMapped: childMapped,
            optionListReduced: childReduced,
            optionList: values(childReduced) as string[],
            optionValueList: keys(childReduced) as string[],
        };
    }, [children]);

    const borderFinalColor = validationError ? "danger" : validationSuccess ? "success" : borderColor;

    const [selectedOptionName, setSelectedOptionName] = useState(
        placeholder ||
            (valueAsString && optionValueList.indexOf(valueAsString) > -1
                ? optionListReduced[valueAsString]
                : optionList.length > 0
                ? optionList[0]
                : "-- Empty Options --")
    );

    const [selectedOptionValue, setSelectedOptionValue] = useState(
        placeholder
            ? ""
            : valueAsString && optionValueList.indexOf(valueAsString) > -1
            ? valueAsString
            : optionValueList.length > 0
            ? optionValueList[0]
            : ""
    );

    useEffect(() => {
        if (valueAsString !== selectedOptionValue) {
            if (optionValueList.indexOf(valueAsString) > -1) {
                setSelectedOptionValue(valueAsString);
                setSelectedOptionName(optionListReduced[valueAsString]);
            }
        }
    }, [valueAsString]);

    useEffect(() => {
        setSelectedOptionName(
            placeholder ||
                (valueAsString && optionValueList.indexOf(valueAsString) > -1
                    ? optionListReduced[valueAsString]
                    : optionList.length > 0
                    ? optionList[0]
                    : "-- Empty Options --")
        );

        setSelectedOptionValue(
            placeholder
                ? ""
                : valueAsString && optionValueList.indexOf(valueAsString) > -1
                ? valueAsString
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
