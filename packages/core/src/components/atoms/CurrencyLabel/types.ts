import { NativeHeadingProps, WebHeadingProps } from "../../typography/Heading/types";

export type CommonProps = {
    currency: string;
    value: number;
};

export type WebCurrencyLabelProps = CommonProps & Omit<WebHeadingProps, "children">;
export type NativeCurrencyLabelProps = CommonProps & Omit<NativeHeadingProps, "children">;
