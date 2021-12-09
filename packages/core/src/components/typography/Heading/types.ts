import { TextProps } from "../Text";

export type HeadingProps = TextProps & {
    /** Defines the element that should be used to render the text string. On native platforms it will mimic the style of web */
    elementLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
