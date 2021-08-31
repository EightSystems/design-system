import * as React from "react";
import * as S from "./styled.native";
import { NativePaymentStatusProps } from "./types";
import Icon from "react-native-vector-icons/MaterialIcons";

import { nativeTheme } from "../../../theme";
import { CurrencyLabel } from "../../primitives/CurrencyLabel/index.native";
import { Heading } from "../../typography/Heading/index.native";
import { Text } from "../../typography/Text/index.native";
import Spacer from "../../layout/Spacer/index.native";

const PaymentStatus = React.forwardRef<any, NativePaymentStatusProps>(
    ({ status, title, description, currency, value }, componentRef) => {
        const iconProps = {
            color: nativeTheme.colors.primaryContrast,
            size: 48,
        };

        return (
            <S.PaymentStatusWrapper ref={componentRef} data-background={status}>
                <Heading fontFace="primaryBold" textColor="primaryContrast" fontSize="lg">
                    {title}
                </Heading>
                <Spacer size={16} />
                <S.IconWrapper>
                    {status === "approved" ? <Icon name="check-circle" {...iconProps} /> : null}
                    {status === "refused" ? <Icon name="error" {...iconProps} /> : null}
                    {status === "pending" ? <Icon name="watch-later" {...iconProps} /> : null}
                </S.IconWrapper>
                <Spacer size={16} />
                <CurrencyLabel currency={currency} value={value} textColor="primaryContrast" fontFace="primaryBold" />
                <Text fontFace="primaryRegular" textColor="primaryContrast" fontSize="sm">
                    {description}
                </Text>
            </S.PaymentStatusWrapper>
        );
    }
);

export default React.memo(PaymentStatus);
