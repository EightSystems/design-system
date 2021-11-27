import Proptypes from "prop-types";
import React from "react";
import { ReactComponent as BankSlip } from "../../../assets/icons/bank-slip.svg";
import { ReactComponent as CreditCard } from "../../../assets/icons/credit-card.svg";
import { ReactComponent as Picpay } from "../../../assets/icons/picpay.svg";
import { ReactComponent as Pix } from "../../../assets/icons/pix.svg";
import * as S from "./styled";

const paymentMethodIconGroup = {
    creditCard: CreditCard,
    bankSlip: BankSlip,
    pix: Pix,
    picpay: Picpay,
};

export const paymentMethodName = {
    creditCard: "Cartão de crédito",
    bankSlip: "Boleto bancário",
    pix: "PIX",
    picpay: "PicPay",
};

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {function} onClick
 *
 * @todo Add better error handling when using unsuported icons.
 * @todo Improve acessibility for SVG icons by populating the title and ARIA attributes correctly.
 */
const PaymentMethodItem = ({ onClick, title, description, icon, props }) => {
    return (
        <S.MainWrapper {...props} onClick={onClick}>
            <S.ContentTitle>{title}</S.ContentTitle>
            <S.IconWrapper>
                {icon === "creditCard" ? <CreditCard /> : null}
                {icon === "bankSlip" ? <BankSlip /> : null}
                {icon === "pix" ? <Pix /> : null}
                {icon === "picpay" ? <Picpay /> : null}
            </S.IconWrapper>
            {description ? <S.ContentLabel>{description}</S.ContentLabel> : null}
        </S.MainWrapper>
    );
};

const isValidPaymentIcon = function (props, propName, componentName) {
    const validIcons = Object.keys(paymentMethodIconGroup);
    const prop = props[propName];

    if (!paymentMethodIconGroup[prop]) {
        return new Error(
            `Invalid prop ${propName} passed to ${componentName} Expected one of the following string patterns: ${validIcons.join(
                ", "
            )}`
        );
    }
};

PaymentMethodItem.propTypes = {
    /** Payment method title. */
    title: Proptypes.string.isRequired,

    /** Payment method description.  */
    description: Proptypes.string,

    /** Icon that must be used in the payment method item. */
    icon: isValidPaymentIcon,

    /** Function that must be fired when onClick prop is declared. */
    onClick: Proptypes.func,
};

export default PaymentMethodItem;
