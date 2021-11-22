import { useActionSheet } from "@expo/react-native-action-sheet";
import React, { useState } from "react";
import { onlyText } from "react-children-utilities";
import * as S from "./styled.native";
import { NativeOptionProps, SelectProps } from "./types";

export { Option } from "./Option.native";

export const Select = (props: SelectProps) => {
    const borderColor = props.validationError ? "danger" : props.validationSuccess ? "success" : null;

    const optionList = React.Children.map(props.children, (child: React.ReactElement<NativeOptionProps>) => {
        return onlyText(child.props.children);
    });

    const optionValueList = React.Children.map(props.children, (child: React.ReactElement<NativeOptionProps>) => {
        return child.props.value;
    });

    const [selectedOptionName, setSelectedOptionName] = useState(
        props.placeholder || (optionList.length > 0 ? optionList[0] : "-- Empty Options --")
    );
    const [selectedOptionValue, setSelectedOptionValue] = useState(
        props.placeholder ? "" : optionValueList.length > 0 ? optionValueList[0] : ""
    );

    const { showActionSheetWithOptions } = useActionSheet();

    const openSelectOptions = () => {
        showActionSheetWithOptions(
            {
                options: [...optionList, props.placeholder || props.optionsCancelMessage || "Cancel"],
                destructiveButtonIndex: props.placeholder ? null : optionList.length,
            },
            selectedIndex => {
                if (selectedIndex < optionList.length) {
                    setSelectedOptionName(optionList[selectedIndex]);
                    setSelectedOptionValue(optionValueList[selectedIndex]);
                } else {
                    if (props.placeholder) {
                        setSelectedOptionName(props.placeholder);
                        setSelectedOptionValue("");
                    }
                }
            }
        );
    };

    return (
        <S.MainWrapper>
            <S.InputLabel fontFace={"secondary"} fontWeight={"medium"} textColor={"dark"} fontSize={"xxs"}>
                {props.label}
            </S.InputLabel>
            <S.SelectComponent
                data-bordercolor={borderColor}
                onPress={openSelectOptions}
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
                {props.validationMessage ? (
                    <React.Fragment>
                        <S.InputValidationIcon familyName={"Material"} icon={"info"} />
                        <S.InputValidationMessage fontFace={"primary"} textColor={"danger"} fontSize={"xxs"}>
                            {props.validationMessage}
                        </S.InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </S.InputValidationContainer>
        </S.MainWrapper>
    );
};

export default Select;
