import { ColorTypes } from "../../../theme/types";
import { FlexBoxProps } from "../../layout/FlexBox/types";
import { TextProps } from "../../typography/Text";

export type RadioProps = Omit<TextProps, "children" | "padding" | "margin" | "selectable"> & {
    checked?: boolean;
    label?: String;
    disabled?: boolean;
    onPress?: () => void;

    uncheckedColor?: ColorTypes;
    color?: ColorTypes;

    name: String;

    /**
     * We use this to keep the elements in each corner of the view, change it to suit your needs.
     */
    justifyContent?: FlexBoxProps["justifyContent"];
};
