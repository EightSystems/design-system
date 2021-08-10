import React from "react";
import { TextInputProps, StyleProp, ViewProps } from "react-native";
import { uniqueId } from "lodash";
import * as S from "./styled.native";

export type TextFieldProps = TextInputProps & {
    /** Unique name used to generate de native input ID. */
    name: string;

    /** String of text used to identify the input name. */
    label: string;

    /** String of text used as the input placeholder. */
    placeholder?: any;

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

/**
 * @todo Add `startIcon` and `endIcon` support, with Tooltip extensions.
 */
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
}: TextFieldProps) => {
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
            {validationMessage ? (
                <S.InputValidationContainer>
                    <React.Fragment>
                        <S.InputValidationMessage>{validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                </S.InputValidationContainer>
            ) : null}
        </S.MainWrapper>
    );
};

export default TextField;
