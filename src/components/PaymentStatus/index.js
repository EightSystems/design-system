import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

import { MdError, MdCheckCircle } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import CurrencyLabel from "../CurrencyLabel";

const PaymentStatus = props => {
    return (
        <S.PaymentStatusWrapper data-background={props.status}>
            <S.IconWrapper>
                {props.status === "approved" ? <MdCheckCircle /> : null}
                {props.status === "refused" ? <MdError /> : null}
                {props.status === "pending" ? <AiFillClockCircle /> : null}
            </S.IconWrapper>

            <S.PaymentStatusTitle>{props.statusTitle}</S.PaymentStatusTitle>

            <CurrencyLabel currency={props.currency} value={props.currencyValue} color="light" />

            <S.PaymentStatusDescription>{props.statusDescription}</S.PaymentStatusDescription>
        </S.PaymentStatusWrapper>
    );
};

PaymentStatus.propTypes = {
    /** Define o status atual do pagamento. */
    status: Proptypes.oneOf(["approved", "refused", "pending"]).isRequired,

    /** Define o título para o status de pagamento. */
    statusTitle: Proptypes.string.isRequired,

    /** Define um título para o status de pagamento. */
    statusDescription: Proptypes.string.isRequired,

    /** A unidade monetária que deve ser utilizada na conversão. Os valores possíveis são os códigos de moeda ISO 4217, como "USD" para o dólar americado, ou "BRL" para o real brasileiro. Consulte a lista de moedas disponíveis [aqui](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** O valor monetário puro que deve ser utilizado na conversão, em formato numérico. */
    currencyValue: Proptypes.number.isRequired,
};

export default PaymentStatus;
