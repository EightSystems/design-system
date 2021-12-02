import React from "react";
import { Text } from "../../typography/Text";
import { paymentMethodIconGroup } from "./icons";
import * as S from "./styled";
import { PaymentMethodItemProps } from "./types";

export const paymentMethodName = {
    creditCard: "Cartão de crédito",
    bankSlip: "Boleto bancário",
    pix: "PIX",
    picpay: "PicPay",
};

export const PaymentMethodItem = ({ onClick, title, description, icon, ...props }: PaymentMethodItemProps) => {
    const IconComponent = paymentMethodIconGroup[icon] ? paymentMethodIconGroup[icon] : null;

    return (
        <S.MainWrapper onClick={onClick} backgroundColor={"white"} borderColor={"mediumTint"} borderType={"sm"}>
            <Text textColor={"lightContrast"} fontSize={"xs"} fontWeight={"bold"}>
                {title}
            </Text>
            <S.IconWrapper>{IconComponent ? <IconComponent /> : null}</S.IconWrapper>
            {description ? (
                <Text textColor={"lightContrast"} fontSize={"xs"}>
                    {description}
                </Text>
            ) : null}
        </S.MainWrapper>
    );
};

export default PaymentMethodItem;
