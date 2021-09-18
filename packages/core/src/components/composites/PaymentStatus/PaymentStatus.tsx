import * as React from "react";
import * as S from "./styled";
import { WebPaymentStatusProps } from "./types";
import { MdError, MdCheckCircle } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { CurrencyLabel } from "../../primitives/CurrencyLabel";

const PaymentStatus = React.forwardRef<any, WebPaymentStatusProps>(
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

export default React.memo(PaymentStatus);
