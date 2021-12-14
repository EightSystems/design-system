let useActionSheet = null;
try {
    useActionSheet = require("@expo/react-native-action-sheet").useActionSheet;
} catch (e) {}

import keys from "lodash/keys";
import values from "lodash/values";
import React, { useCallback, useEffect, useState } from "react";
import { onlyText } from "react-children-utilities";
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
}: SelectProps) => {
    if (!useActionSheet) {
        return null;
    }

    const extractChildValues = useCallback(() => {
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

    const { optionListReduced, optionList, optionValueList } = extractChildValues();

    const borderColor = validationError ? "danger" : validationSuccess ? "success" : "darkTint";

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

    const { showActionSheetWithOptions } = useActionSheet();

    const openSelectOptions = () => {
        onFocus && onFocus();

        showActionSheetWithOptions(
            {
                options: [...optionList, placeholder || optionsCancelMessage || "Cancel"],
                destructiveButtonIndex: placeholder ? null : optionList.length,
                useModal: true,
            },
            selectedIndex => {
                if (selectedIndex < optionList.length) {
                    setSelectedOptionName(optionList[selectedIndex]);
                    setSelectedOptionValue(optionValueList[selectedIndex]);
                    onChange && onChange(optionValueList[selectedIndex]);
                } else {
                    if (placeholder) {
                        setSelectedOptionName(placeholder);
                        setSelectedOptionValue("");
                        onChange && onChange("");
                    }
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
                borderColor={borderColor}
                onClick={openSelectOptions}
                backgroundColor={"white"}
                fontFace={"secondary"}
                fontWeight={"normal"}
                textColor={"textSecondary"}
                textAlign={"left"}
                endIcon={<S.InputArrowIcon familyName={"FontAwesome"} icon={"chevron-down"} />}
            >
                {selectedOptionName}
            </S.SelectComponent>
            <S.InputValidationContainer>
                {validationMessage ? (
                    <React.Fragment>
                        <S.InputValidationIcon familyName={"Material"} icon={"info"} />
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
