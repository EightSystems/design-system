import React from "react";
import { Text } from "../../typography/Text";
import { paymentMethodIconGroup } from "./icons";
import * as S from "./styled";
import { PaymentMethodItemProps } from "./types";

export const PaymentMethodItem = ({ onClick, title, description, icon }: PaymentMethodItemProps) => {
    const IconComponent = paymentMethodIconGroup[icon] ? paymentMethodIconGroup[icon] : null;

    return (
        <S.MainWrapper onClick={onClick} backgroundColor={"white"} borderColor={"mediumTint"} borderType={"sm"}>
            <Text textColor={"lightContrast"} fontSize={"xs"} fontWeight={"bold"} textAlign={"center"}>
                {title}
            </Text>
            <S.IconWrapper>{IconComponent ? <IconComponent /> : null}</S.IconWrapper>
            {description ? (
                <Text textColor={"lightContrast"} fontSize={"xs"} textAlign={"center"}>
                    {description}
                </Text>
            ) : null}
        </S.MainWrapper>
    );
};

export default PaymentMethodItem;
