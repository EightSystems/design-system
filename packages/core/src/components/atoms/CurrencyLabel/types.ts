import { TextProps } from "../../typography/Text";

export type CurrencyLabelProps = Omit<TextProps, "children"> & {
    currency: string;
    value: number;
};
