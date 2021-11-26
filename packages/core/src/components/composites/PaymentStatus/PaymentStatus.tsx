import * as React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { MdCheckCircle, MdError } from "react-icons/md";
import { CurrencyLabel } from "../../primitives/CurrencyLabel";
import * as S from "./styled";
import { WebPaymentStatusProps } from "./types";

export const PaymentStatus = React.forwardRef<HTMLDivElement, WebPaymentStatusProps>(
    ({ status, title, description, currency = null, value = 0 }, componentRef) => {
        return (
            <S.PaymentStatusWrapper ref={componentRef} data-background={status}>
                <S.IconWrapper>
                    {status === "approved" ? <MdCheckCircle /> : null}
                    {status === "refused" ? <MdError /> : null}
                    {status === "pending" ? <AiFillClockCircle /> : null}
                </S.IconWrapper>
                <S.PaymentStatusTitle>{title}</S.PaymentStatusTitle>

                {currency ? (
                    <CurrencyLabel currency={currency} value={value} textColor="primaryContrast" fontWeight="bold" />
                ) : null}

                <S.PaymentStatusDescription>{description}</S.PaymentStatusDescription>
            </S.PaymentStatusWrapper>
        );
    }
);

export default PaymentStatus;
