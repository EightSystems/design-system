import { WebHeadingProps } from "../../typography/Heading";

export type CurrencyLabelProps = WebHeadingProps & {
    currency: string;
    value: number;
};
