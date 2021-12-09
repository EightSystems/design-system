import { AvatarProps } from "../../atoms/Avatar/types";
import { CurrencyLabelProps } from "../../atoms/CurrencyLabel/types";

export type PaymentPromptProps = {
    label: string;

    avatarChildren?: AvatarProps["children"];
    avatarAlt?: string;
    avatarSrc?: string;
    avatarSize?: AvatarProps["size"];

    currency: string;
    currencyValue: number;
    currencySize?: CurrencyLabelProps["fontSize"];
};
