import { ColorTypes } from "../../../theme/types";
import { FlexBoxProps } from "../../layout/FlexBox/types";
import { TextProps } from "../../typography/Text";

export type SwitchProps = Omit<TextProps, "children" | "padding" | "margin" | "selectable"> & {
    checked?: boolean;
    label?: String;
    disabled?: boolean;
    onValueChange?: () => void;

    uncheckedColor?: ColorTypes;
    color?: ColorTypes;
    trackColor?: ColorTypes;

    name: string;

    /**
     * We use this to keep the elements in each corner of the view, change it to suit your needs.
     */
    justifyContent?: FlexBoxProps["justifyContent"];
};
