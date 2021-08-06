import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

import { MdError, MdCheckCircle } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import CurrencyLabel from "../../primitives/CurrencyLabel";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {any} status
 * @property {any} title
 * @property {any} description
 * @property {any} currency
 * @property {any} value
 */
const PaymentStatus = ({ status, title, description, currency, value }) => {
    return (
        <S.PaymentStatusWrapper data-background={status}>
            <S.IconWrapper>
                {status === "approved" ? <MdCheckCircle /> : null}
                {status === "refused" ? <MdError /> : null}
                {status === "pending" ? <AiFillClockCircle /> : null}
            </S.IconWrapper>

            <S.PaymentStatusTitle>{title}</S.PaymentStatusTitle>

            <CurrencyLabel currency={currency} value={value} color="light" />

            <S.PaymentStatusDescription>{description}</S.PaymentStatusDescription>
        </S.PaymentStatusWrapper>
    );
};

PaymentStatus.propTypes = {
    /** Defines the current payment status. */
    status: Proptypes.oneOf(["approved", "refused", "pending"]).isRequired,

    /** Defines the title for the payment status. */
    title: Proptypes.string.isRequired,

    /** Defines the description for the payment status. */
    description: Proptypes.string.isRequired,

    /** The monetary unit that will be used in the conversion. The possible values are ISO 4217 currency codes,
     * like "USD" for the American dollar, or "BRL" for Brazillian real. You can look at the availbale currency codes
     * [here](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** The value that will be used in the conversion, in numeric format. */
    value: Proptypes.number.isRequired,
};

export default PaymentStatus;
