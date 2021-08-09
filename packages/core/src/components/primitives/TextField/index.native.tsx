import React from "react";
import { TextInput, TextInputProps, StyleProp, ViewProps, Text } from "react-native";
import { uniqueId } from "lodash";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as S from "./styled.native";

import { nativeTheme } from "../../../theme";

export type TextFieldProps = TextInputProps & {
    /** Unique name used to generate de native input ID. */
    name: string;

    /** String of text used to identify the input name. */
    label: string;

    /** String of text used as the input placeholder. */
    placeholder?: any;

    /** Determinates the input type. This prop accepts valid `type` values for the traditional web `<input>` element, as well as valid values for the native TextInput `autoCompleteType` props */
    type?:
        | "cc-csc"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-number"
        | "email"
        | "name"
        | "password"
        | "postal-code"
        | "street-address"
        | "tel"
        | "username"
        | "off"
        | undefined;

    /** Determinates if autoComplete should be used for this input. */
    autoComplete?: string;

    /** If true, the input will be displayed as disabled, and announced as a non-editable input for screen-readers. */
    disabled?: boolean;

    /** The `value` for the internal TextInput component. */
    value: any;

    /** If `true` the input will indicate validation succcess. */
    validationSuccess?: boolean;

    /** If `true` the input will indicate validation error, and show the message string from `validationMessage` prop. */
    validationError?: boolean;

    /** String of text shown bellow the input whenever `validationError` is `true`. */
    validationMessage?: string;

    /** Used to pass custom styles to the entire container. */
    controlStyle?: StyleProp<ViewProps>;

    /** Used to pass custom styles to the validation container. */
    validationStyle?: StyleProp<ViewProps>;

    /** Used to pass custom styles to the native `TextInput` component. */
    inputStyle?: StyleProp<TextInputProps>;

    /** Optional for use-cases like custom input components provided by validation packages. */
    children?: React.ReactNode;
};

const TextField = ({
    name,
    label,
    placeholder,
    type,
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
}: TextFieldProps) => {
    const accessibilityState = { disabled: disabled };
    const elementUniqueId = uniqueId(name);

    const [value, setValue] = React.useState<any>("");
    const [focused, setFocused] = React.useState<boolean>(false);

    return (
        <S.MainWrapper accessible accessibilityLabel={label} accessibilityState={accessibilityState}>
            <Text>{label}</Text>
            <S.InputWrapper data-validationSuccess={validationSuccess} data-validationError={validationError}>
                <S.InputLabel
                    {...props}
                    data-disabled={disabled}
                    data-focused={focused}
                    nativeID={elementUniqueId}
                    placeholder={placeholder}
                    value={value}
                    editable={!disabled}
                    onChangeText={text => setValue(text)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </S.InputWrapper>
            {validationMessage ? (
                <S.InputValidationContainer>
                    <React.Fragment>
                        <Icon name="info" color={nativeTheme.colors.danger} />
                        <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                </S.InputValidationContainer>
            ) : null}
        </S.MainWrapper>
    );
};

export default TextField;
