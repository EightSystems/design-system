import * as React from "react";
import { BorderPosition, BorderTypes, ColorTypes, RadiusTypes } from "../../../theme/types";
import { TooltipProps } from "../../feedback/Tooltip/types";

export type TextFieldProps = {
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

    maskOptions?: any;

    /** Type of the `input` element. Must be a valid `type` element for the HTML5 `<input>` element, and applicable for text inputs.  */
    type?: "password" | "email" | "text" | "tel" | "number" | "search" | "url";

    /** If specified, determinates the content inside the Tooltip. Must be a valid React element. */
    tooltipContent?: TooltipProps["tooltipContent"];

    /** Determinates where the Tooltip will be positioned in relation to the component it's attached */
    tooltipPlacement?: TooltipProps["placement"];

    /** Defines the distance between the Tooltip and the component to which it is attached. */
    tooltipOffset?: TooltipProps["offset"];

    /** Distance between popover and trigger's cross axis. */
    tooltipCrossOffset?: TooltipProps["crossOffset"];

    /** Receives the text value */
    onChange?: (textValue: string) => void;

    required?: boolean;

    onBlur?: () => void;
    onFocus?: () => void;

    /**
     * This only works on native
     */
    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";

    /** Color of the input border. */
    borderColor?: ColorTypes;

    /** Type of the input border. */
    borderType?: BorderTypes;

    /** Radius of the input border. */
    borderRadius?: RadiusTypes;

    /** Position of the border, it can be a single string, or an array of strings */
    borderPosition?: BorderPosition | BorderPosition[];

    /** Use this to create a textarea */
    multiline?: boolean;

    numberOfLines?: number;
};
