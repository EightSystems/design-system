import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import { MdError, MdCheckCircle } from "react-icons/md";
import CurrencyLabel from "../CurrencyLabel";

const PaymentStatusWrapper = styled.div`
    font-family: ${V.FontFaces.Inter};
    box-shadow: ${V.BoxShadow.default};
    padding: ${V.Space.default};
    text-align: center;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &[data-background="approved"] {
        background: var(--primary);
    }
    &[data-background="refused"] {
        background: var(--danger);
    }
    &[data-background="pending"] {
        background: var(--pending);
    }
`;
const IconWrapper = styled.div`
    margin-top: ${V.Space.default};
    margin-bottom: ${V.Space.default};
    svg {
        width: ${V.Space.xlg};
        height: ${V.Space.xlg};
        color: var(--primaryContrast);
    }
`;
const PaymentStatusTitle = styled.h1`
    margin-bottom: ${V.Space.default};
    color: var(--primaryContrast);
    font-size: 36px;
    font-weight: 700;
`;
const PaymentStatusDescription = styled.p`
    margin-top: ${V.Space.default};
    margin-bottom: ${V.Space.default};
    color: var(--primaryContrast);
    font-size: 18px;
`;

const PaymentStatus = props => {
    return (
        <PaymentStatusWrapper data-background={props.status}>
            <IconWrapper>
                {props.status === "approved" ? <MdCheckCircle /> : null}
                {props.status === "refused" ? <MdError /> : null}
                {props.status === "pending" ? <MdError /> : null}
            </IconWrapper>

            <PaymentStatusTitle>{props.statusTitle}</PaymentStatusTitle>

            <CurrencyLabel currency={props.currency} value={props.currencyValue} color="light" />

            <PaymentStatusDescription>{props.statusDescription}</PaymentStatusDescription>
        </PaymentStatusWrapper>
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
