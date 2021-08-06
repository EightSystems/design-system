import { PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
    /** The color of the button background, or the button outline when the `variant` is "outline". */
    color?: string;

    /** Determinates the button variant the be used. */
    variant?: "solid" | "outline" | "ghost";

    /** When `true`, the button will be shown as disabled and with a spinner. */
    loading?: boolean;

    /** The size of the button. */
    size?: "small" | "medium" | "large";

    /** The startIcon to use in the Button. */
    startIcon?: React.ReactNode;

    /** The end icon to use in the Button. */
    endIcon?: React.ReactNode;

    /** The padding between the icon and the text. */
    iconPadding?: number;

    /** The color of the spinner. */
    spinnerColor?: any;

    /** When `true` the button is shown as disabled. */
    disabled?: boolean;
}
