import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { nativeTheme } from "../../../theme";
import Spacer from "../../layout/Spacer/index.native";
import { CurrencyLabel } from "../../primitives/CurrencyLabel/index.native";
import { Heading } from "../../typography/Heading/index.native";
import { Text } from "../../typography/Text/index.native";
import * as S from "./styled.native";
import { NativePaymentStatusProps } from "./types";

export const PaymentStatus = React.forwardRef<View, NativePaymentStatusProps>(
    ({ status, title, description, currency = null, value = 0 }, componentRef) => {
        const iconProps = {
            color: nativeTheme.colors.primaryContrast,
            size: 48,
        };

        return (
            <S.PaymentStatusWrapper ref={componentRef} data-background={status}>
                <S.IconWrapper>
                    {status === "approved" ? <Icon name="check-circle" {...iconProps} /> : null}
                    {status === "refused" ? <Icon name="error" {...iconProps} /> : null}
                    {status === "pending" ? <Icon name="watch-later" {...iconProps} /> : null}
                </S.IconWrapper>
                <Spacer size={16} />
                <Heading textAlign="center" fontFace="primaryBold" textColor="primaryContrast" fontSize="lg">
                    {title}
                </Heading>
                <Spacer size={16} />

                {currency ? (
                    <CurrencyLabel
                        currency={currency}
                        value={value}
                        textColor="primaryContrast"
                        fontFace="primaryBold"
                    />
                ) : null}

                <Text textAlign="center" fontFace="primaryRegular" textColor="primaryContrast" fontSize="sm">
                    {description}
                </Text>
            </S.PaymentStatusWrapper>
        );
    }
);

export default PaymentStatus;
