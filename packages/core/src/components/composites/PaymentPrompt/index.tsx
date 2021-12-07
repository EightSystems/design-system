import React from "react";
import { Avatar } from "../../atoms/Avatar";
import { CurrencyLabel } from "../../atoms/CurrencyLabel";
import { CenteredFlexBox } from "../../layout/FlexBox";
import { Text } from "../../typography/Text";
import { PaymentPromptProps } from "./types";

export const PaymentPrompt = ({
    label,
    avatarChildren,
    avatarAlt,
    avatarSrc,
    avatarSize = "large",
    currency,
    currencyValue,
    currencySize = "lg",
}: PaymentPromptProps) => {
    return (
        <CenteredFlexBox flexDirection={"column"}>
            {avatarSrc ? (
                <Avatar src={avatarSrc} size={avatarSize} alt={avatarAlt} />
            ) : (
                <Avatar alt={avatarAlt} size={avatarSize}>
                    {avatarChildren}
                </Avatar>
            )}
            <Text textAlign={"center"} textColor={"lightContrast"} fontFace={"primary"} fontSize={"md"} margin={"xs"}>
                {label}
            </Text>
            <CurrencyLabel currency={currency} fontSize={currencySize} value={currencyValue} />
        </CenteredFlexBox>
    );
};

export default PaymentPrompt;
