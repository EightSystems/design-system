import * as React from "react";
import { BorderPosition, BorderTypes, ColorTypes, RadiusTypes } from "../../../theme/types";
import { TooltipProps } from "../../feedback/Tooltip/types";
import { IconProps } from "../../primitives/Icon";

export type AutoCompleteType =
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

export type AutoCompleteWebType = "one-time-code" | "new-password";

export type TextFieldProps = {
    autoCorrect?: boolean;

    /**
     * Determines which content to suggest on auto complete, e.g.`username`.
     * To disable auto complete, use `off`.
     *
     * *Android and Web Only*
     *
     * The following values work on Android and Web only:
     *
     * - `username`
     * - `password`
     * - `email`
     * - `name`
     * - `tel`
     * - `street-address`
     * - `postal-code`
     * - `cc-number`
     * - `cc-csc`
     * - `cc-exp`
     * - `cc-exp-month`
     * - `cc-exp-year`
     * - `off`
     */
    autoCompleteType?: AutoCompleteType;

    /**
     * Same as `autoCompleteType` with some extra options, but this only works on React Native 0.66+ or Web.
     * Extra options:
     * - `one-time-code`
     * - `new-password`
     */
    autoComplete?: AutoCompleteType | AutoCompleteWebType;

    /** AutoFocus on Page Load for Web, and componentDidMount or useEffect */
    autoFocus?: boolean;

    /** This prevents the keyboard going away when you press the return key button */
    blurOnSubmit?: boolean;

    /** Unique name used to generate de native input ID. */
    name: string;

    /** String of text used to identify the input name. */
    label: string;

    /** String of text used as the input placeholder. */
    placeholder?: string;

    /** If true, the input will be displayed as disabled, and announced as a non-editable input for screen-readers. */
    disabled?: boolean;

    /** The `value` for the internal TextInput component. */
    value?: string;

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
    icon?: "info" | "error" | "success" | "loadingSpinner" | IconProps["icon"];
    iconFamily?: IconProps["familyName"];
    iconPosition?: "start" | "end";

    /** If specified, defines that this TextField should be masked */
    masked?: boolean;

    /**
     * The mask type when `masked` is `true`, when you use "custom" you need to define `maskOptions` otherwise it will crash.
     */
    maskType?:
        | "credit-card"
        | "cpf"
        | "cnpj"
        | "zip-code"
        | "only-numbers"
        | "money"
        | "cel-phone"
        | "datetime"
        | "custom";

    maskOptions?: any;

    /** Type of the `input` element. Must be a valid `type` element for the HTML5 `<input>` element, and applicable for text inputs.  */
    type?: "password" | "email" | "text" | "tel" | "number" | "search" | "url";

    /**
     * Respective `keyboardType` in Native (the ones that are cross-platform), and we map this to `inputMode` in Web
     */
    keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";

    /** If specified, determinates the content inside the Tooltip. Must be a valid React element. */
    tooltipContent?: TooltipProps["tooltipContent"];

    /** Determinates where the Tooltip will be positioned in relation to the component it's attached */
    tooltipPlacement?: TooltipProps["placement"];

    /** Defines the distance between the Tooltip and the component to which it is attached. */
    tooltipOffset?: TooltipProps["offset"];

    /** Distance between popover and trigger's cross axis. */
    tooltipCrossOffset?: TooltipProps["crossOffset"];

    /**
     * Only works on Web
     */
    required?: boolean;

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

    /** This is the respective react-native `returnKeyType` that works in both of the platforms, and is mapped to `enterKeyHint` on Web */
    returnKeyType?: "done" | "go" | "next" | "search" | "send";

    /** Receives the text value */
    onChange?: (textValue: string) => void;
    onBlur?: (event?: any) => void;
    onFocus?: (event?: any) => void;
    onSubmitEditing?: (event?: any) => void;
    onKeyPress?: (event?: any) => void;
};
