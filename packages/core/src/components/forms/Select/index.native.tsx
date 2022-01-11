let useActionSheet = null;
try {
    useActionSheet = require("@expo/react-native-action-sheet").useActionSheet;
} catch (e) {}

import keys from "lodash/keys";
import values from "lodash/values";
import React, { useEffect, useMemo, useState } from "react";
import { onlyText } from "react-children-utilities";
import { Icon } from "../../primitives/Icon";
import * as S from "./styled.native";
import { OptionElement, SelectProps } from "./types";

export { Option } from "./Option.native";

export const Select = ({
    onChange,
    onBlur,
    onFocus,
    validationError,
    validationSuccess,
    validationMessage,
    children,
    placeholder,
    label,
    optionsCancelMessage,
    value,
    borderRadius = "sm",
    borderPosition = "all",
    borderType = "default",
    borderColor = "darkTint",
}: SelectProps) => {
    if (!useActionSheet) {
        return null;
    }

    const { optionListReduced, optionList, optionValueList } = useMemo(() => {
        const childMapped = React.Children.map(children, (child: OptionElement) => {
            return {
                value: child.props.value,
                text: onlyText(child.props.children),
            };
        });

        const childReduced = childMapped.reduce<any>((previousValue, currentValue) => {
            previousValue[currentValue.value] = currentValue.text;
            return previousValue;
        }, {});

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
    }, [optionValueList]);

    const { showActionSheetWithOptions } = useActionSheet();

    const openSelectOptions = () => {
        onFocus && onFocus();

        showActionSheetWithOptions(
            {
                options: [...optionList, optionsCancelMessage || "Cancel"],
                destructiveButtonIndex: optionList.length,
                useModal: true,
            },
            selectedIndex => {
                if (selectedIndex < optionList.length) {
                    setSelectedOptionName(optionList[selectedIndex]);
                    setSelectedOptionValue(optionValueList[selectedIndex]);
                    onChange && onChange(optionValueList[selectedIndex]);
                }

                onBlur && onBlur();
            }
        );
    };

    return (
        <S.MainWrapper>
            <S.InputLabel fontFace={"secondary"} fontWeight={"medium"} textColor={"dark"} fontSize={"xxs"}>
                {label}
            </S.InputLabel>
            <S.SelectComponent
                borderColor={borderFinalColor}
                borderType={borderType}
                borderRadius={borderRadius}
                borderPosition={borderPosition}
                onClick={openSelectOptions}
                backgroundColor={"white"}
                fontFace={"secondary"}
                fontWeight={"medium"}
                textColor={"dark"}
                textAlign={"left"}
                endIcon={<Icon familyName={"FontAwesome"} icon={"chevron-down"} size={"sm"} />}
            >
                {selectedOptionName}
            </S.SelectComponent>
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
        </S.MainWrapper>
    );
};

export default Select;
