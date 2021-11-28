import * as React from "react";
import { StyleProp, TextInputProps, ViewProps } from "react-native";

type CommonProps = {
    /** Unique name used to generate de native input ID. */
    name: string;

    /** String of text used to identify the input name. */
    label: string;

    /** String of text used as the input placeholder. */
    placeholder?: string;

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

    /** Optional for use-cases like custom input components provided by validation packages. */
    children?: React.ReactNode;

    /** Limits the maximum number of characters that can be entered. */
    maxLength?: number;

    /** If specified, will define what of icon will be shown inside the component. */
    icon?: "info" | "error" | "success" | "loadingSpinner";

    /** If specified, defines that this TextField should be masked */
    masked?: boolean;

    maskType?:
        | "credit-card"
        | "cpf"
        | "cnpj"
        | "zip-code"
        | "only-numbers"
        | "money"
        | "cel-phone"
        | "datetime"
        | "custom"
        | string;

    options?: any;

    /** Type of the `input` element. Must be a valid `type` element for the HTML5 `<input>` element, and applicable for text inputs.  */
    type?: "password" | "email" | "text" | "tel" | "number" | "search" | "url";
};

type WebProps = CommonProps & {
    /** If specified, determinates the content inside the Tooltip. Must be a valid React element. */
    tooltipContent?: React.ReactNode | string;

    /** Determinates where the Tooltip will be positioned in relation to the component it's attached */
    tooltipPlacement?:
        | "auto"
        | "auto-start"
        | "auto-end"
        | "top"
        | "top-start"
        | "top-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "right"
        | "right-start"
        | "right-end"
        | "left"
        | "left-start"
        | "left-end";

    /** Overrides or extends the style classes from the Tooltip component. */
    tooltipClass?: string;

    /** Defines the distance between the Tooltip and the component to which it is attached. */
    tooltipOffset?: number;

    /** Distance between popover and trigger's cross axis. */
    tooltipCrossOffset?: number;

    /** Injects custom classes in the container that wraps the entire controller (label + input). */
    controlClass?: string;

    /** Receives the text value */
    onChange?: (textValue: string) => void;
};

type NativeProps = CommonProps & {
    /** Used to pass custom styles to the entire container. */
    controlStyle?: StyleProp<ViewProps>;

    /** Used to pass custom styles to the validation container. */
    validationStyle?: StyleProp<ViewProps>;

    /** Used to pass custom styles to the native `TextInput` component. */
    inputStyle?: StyleProp<TextInputProps>;

    /** Receives the text value */
    onChange?: (textValue: string) => void;

    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
};

export type NativeTextFieldProps = Omit<TextInputProps, "onChange"> & NativeProps;
export type WebTextFieldProps = Omit<React.ComponentProps<"input">, "onChange"> & WebProps;
