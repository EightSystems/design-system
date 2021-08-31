import { WebHeadingProps, NativeHeadingProps } from "../../typography/Heading/types";

type CommonProps = {
    currency: string;
    value: number;
};

export type WebCurrencyLabelProps = CommonProps & Omit<WebHeadingProps, "children">;
export type NativeCurrencyLabelProps = CommonProps & Omit<NativeHeadingProps, "children">;
