import React from "react";
import { uniqueId } from "lodash";
import * as S from "./styled.native";
import { NativeTextFieldProps } from "./types";
import { TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { nativeTheme } from "../../../theme";

const TextField = React.forwardRef<TextInputProps, NativeTextFieldProps>(
    (
        {
            name,
            label,
            placeholder,
            autoCompleteType,
            disabled,
            validationSuccess,
            validationError,
            validationMessage,
            children,
            controlStyle,
            inputStyle,
            validationStyle,
            masked,
            type,
            options,
            ...props
        },
        componentRef
    ) => {
        const accessibilityState = { disabled: disabled };
        const elementUniqueId = uniqueId(name);

        const [value, setValue] = React.useState<any>("");
        const [focused, setFocused] = React.useState<boolean>(false);

        const inputProps = {
            maxLength: props.maxLength ? props.maxLength : null,
            "data-disable": disabled,
            nativeID: elementUniqueId,
            placeholder: placeholder,
            value: value,
            editable: !disabled,
        };
        return (
            <S.MainWrapper accessible accessibilityLabel={label} accessibilityState={accessibilityState}>
                <S.InputLabel data-focused={focused}>{label}</S.InputLabel>
                <S.InputWrapper
                    data-validationSuccess={validationSuccess}
                    data-validationError={validationError}
                    data-focused={focused}
                >
                    {masked ? (
                        <S.MaskedInputComponent
                            {...props}
                            {...inputProps}
                            type={type}
                            options={options}
                            onChangeText={text => setValue(text)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    ) : (
                        <S.InputComponent
                            {...props}
                            {...inputProps}
                            onChangeText={text => setValue(text)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    )}
                </S.InputWrapper>
                <S.InputValidationContainer>
                    {validationMessage ? (
                        <React.Fragment>
                            <Icon name="error" color={nativeTheme.colors.danger} size={14} />
                            <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            </S.MainWrapper>
        );
    }
);

export default React.memo(TextField);
