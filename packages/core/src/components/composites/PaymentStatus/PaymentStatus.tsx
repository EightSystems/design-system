import * as React from "react";
import * as S from "./styled";
import { WebPaymentStatusProps } from "./types";
import { MdError, MdCheckCircle } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { CurrencyLabel } from "../../primitives/CurrencyLabel";

const PaymentStatus = React.forwardRef<any, WebPaymentStatusProps>(
    ({ status, title, description, currency, value }, componentRef) => {
        return (
            <S.PaymentStatusWrapper ref={componentRef} data-background={status}>
                <S.IconWrapper>
                    {status === "approved" ? <MdCheckCircle /> : null}
                    {status === "refused" ? <MdError /> : null}
                    {status === "pending" ? <AiFillClockCircle /> : null}
                </S.IconWrapper>
                <S.PaymentStatusTitle>{title}</S.PaymentStatusTitle>
                <CurrencyLabel currency={currency} value={value} textColor="primaryContrast" fontWeight="bold" />
                <S.PaymentStatusDescription>{description}</S.PaymentStatusDescription>
            </S.PaymentStatusWrapper>
        );
    }
);

export default React.memo(PaymentStatus);
