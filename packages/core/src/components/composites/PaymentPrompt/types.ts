import { CommonProps as AvatarCommonProps } from "../../atoms/Avatar/types";
import { WebCurrencyLabelProps } from "../../atoms/CurrencyLabel/types";

export type PaymentPromptProps = {
    label: string;

    avatarChildren?: AvatarCommonProps["children"];
    avatarAlt?: string;
    avatarSrc?: string;
    avatarSize?: AvatarCommonProps["size"];

    currency: string;
    currencyValue: number;
    currencySize?: WebCurrencyLabelProps["fontSize"];
};
