import React from "react";
import { uniqueId } from "lodash";
import * as S from "./styled.native";
import { NativeTextFieldProps } from "./types";

const TextField = ({
    name,
    label,
    placeholder,
    autoComplete,
    disabled,
    validationSuccess,
    validationError,
    validationMessage,
    children,
    controlStyle,
    inputStyle,
    validationStyle,
    ...props
}: NativeTextFieldProps) => {
    const accessibilityState = { disabled: disabled };
    const elementUniqueId = uniqueId(name);

    const [value, setValue] = React.useState<any>("");
    const [focused, setFocused] = React.useState<boolean>(false);

    return (
        <S.MainWrapper accessible accessibilityLabel={label} accessibilityState={accessibilityState}>
            <S.InputLabel>{label}</S.InputLabel>
            <S.InputWrapper
                data-validationSuccess={validationSuccess}
                data-validationError={validationError}
                data-focused={focused}
            >
                <S.InputComponent
                    {...props}
                    maxLength={props.maxLength ? +props.maxLength : null}
                    data-disabled={disabled}
                    nativeID={elementUniqueId}
                    placeholder={placeholder}
                    value={value}
                    editable={!disabled}
                    onChangeText={text => setValue(text)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </S.InputWrapper>
            <S.InputValidationContainer>
                {validationMessage ? (
                    <React.Fragment>
                        <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </S.InputValidationContainer>
        </S.MainWrapper>
    );
};

export default TextField;
