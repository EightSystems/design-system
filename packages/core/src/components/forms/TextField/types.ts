import { TextInputProps, StyleProp, ViewProps } from "react-native";

type CommonProps = {
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

export type NativeTextFieldProps = TextInputProps & CommonProps;
