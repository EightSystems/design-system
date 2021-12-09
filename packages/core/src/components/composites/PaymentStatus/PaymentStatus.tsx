import * as React from "react";
import { CurrencyLabel } from "../../atoms/CurrencyLabel";
import { Spacer } from "../../layout/Spacer";
import { Icon } from "../../primitives/Icon";
import { Heading } from "../../typography/Heading";
import { Text } from "../../typography/Text";
import * as S from "./styled";
import { PaymentStatusProps } from "./types";

export const PaymentStatus = React.memo<PaymentStatusProps>(
    ({ status, title, description, currency = null, value = 0 }: PaymentStatusProps) => {
        return (
            <S.PaymentStatusWrapper data-background={status}>
                <S.IconWrapper>
                    {status === "approved" ? (
                        <Icon familyName={"Material"} icon="md-check-circle" size="xxl" color={"primaryContrast"} />
                    ) : null}
                    {status === "refused" ? (
                        <Icon familyName={"Material"} icon="md-error" size="xxl" color={"primaryContrast"} />
                    ) : null}
                    {status === "pending" ? (
                        <Icon familyName={"Material"} icon="md-watch-later" size="xxl" color={"primaryContrast"} />
                    ) : null}
                </S.IconWrapper>
                <Spacer size={16} />
                <Heading
                    textAlign="center"
                    fontFace="primary"
                    fontWeight={"bold"}
                    textColor="primaryContrast"
                    fontSize="lg"
                >
                    {title}
                </Heading>
                <Spacer size={16} />

                {currency ? (
                    <CurrencyLabel
                        currency={currency}
                        value={value}
                        textColor="primaryContrast"
                        fontFace="primary"
                        fontWeight="bold"
                        textAlign={"center"}
                    />
                ) : null}

                <Text textAlign="center" fontFace="primary" textColor="primaryContrast" fontSize="sm">
                    {description}
                </Text>
            </S.PaymentStatusWrapper>
        );
    }
);

PaymentStatus.displayName = "PaymentStatus";

export default PaymentStatus;
