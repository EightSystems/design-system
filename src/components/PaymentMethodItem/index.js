import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

/* Older implementation of the icon import statements:
import { ReactComponent as CreditCardSvg } from "../../assets/icons/credit-card.svg";
import { ReactComponent as BankSlipSvg } from "../../assets/icons/bank-slip.svg";
import { ReactComponent as Pix } from "../../assets/icons/pix.svg";
import { ReactComponent as PicPay } from "../../assets/icons/picpay.svg";
*/

import CreditCard from "../../assets/icons/CreditCard";
import BankSlip from "../../assets/icons/BankSlip";
import Pix from "../../assets/icons/Pix";
import Picpay from "../../assets/icons/Picpay";

const paymentMethodIconGroup = {
    creditCard: CreditCard,
    bankSlip: BankSlip,
    pix: Pix,
    picpay: Picpay,
};

const paymentMethodName = {
    creditCard: "Cartão de crédito",
    bankSlip: "Boleto bancário",
    pix: "PIX",
    picpay: "PicPay",
};

/* Older implementation of the icon injector:
const IconCompoment = paymentMethodIcon[props.paymentMethodIcon];
<IconComponent alt={`Ícone ${paymentMethodName[paymentMethodIcon]}`} />
*/

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} paymentMethod
 * @property {string} paymentMethodDescription
 * @property {string} paymentMethodIcon
 * @property {function} onClick
 *
 * @todo Add better error handling when using unsuported icons.
 * @todo Improve acessibility for SVG icons by populating the title and ARIA attributes correctly.
 */
const PaymentMethodItem = ({ onClick, paymentMethod, paymentMethodDescription, paymentMethodIcon, props }) => {
    return (
        <S.MainWrapper {...props} onClick={onClick}>
            <S.ContentTitle>{paymentMethod}</S.ContentTitle>
            <S.IconWrapper>
                {paymentMethodIcon === "creditCard" ? <CreditCard /> : null}
                {paymentMethodIcon === "bankSlip" ? <BankSlip /> : null}
                {paymentMethodIcon === "pix" ? <Pix /> : null}
                {paymentMethodIcon === "picpay" ? <Picpay /> : null}
            </S.IconWrapper>
            {paymentMethodDescription ? <S.ContentLabel>{paymentMethodDescription}</S.ContentLabel> : null}
        </S.MainWrapper>
    );
};

PaymentMethodItem.propTypes = {
    /** Payment method title. */
    paymentMethod: Proptypes.string.isRequired,

    /** Payment method description.  */
    paymentMethodDescription: Proptypes.string,

    /** Icon that must be used in the payment method item. */
    paymentMethodIcon: Proptypes.oneOf(Object.keys(paymentMethodIconGroup)).isRequired,

    /** Function that must be fired when onClick prop is declared. */
    onClick: Proptypes.func,
};

export default PaymentMethodItem;
