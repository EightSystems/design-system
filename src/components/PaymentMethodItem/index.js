import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

import { ReactComponent as CreditCardSvg } from "../../assets/icons/credit-card.svg";
import { ReactComponent as BankSlipSvg } from "../../assets/icons/bank-slip.svg";
import { ReactComponent as Pix } from "../../assets/icons/pix.svg";
import { ReactComponent as PicPay } from "../../assets/icons/picpay.svg";

const paymentMethodIcon = {
    creditCard: CreditCardSvg,
    bankSlip: BankSlipSvg,
    pix: Pix,
    picpay: PicPay,
};

const paymentMethodName = {
    creditCard: "Cartão de crédito",
    bankSlip: "Boleto bancário",
    pix: "PIX",
    picpay: "PicPay",
};

const PaymentMethodItem = props => {
    const IconComponent = paymentMethodIcon[props.paymentMethodIcon];

    return (
        <S.MainWrapper {...props} onClick={props.onClick}>
            <S.ContentTitle>{props.paymentMethod}</S.ContentTitle>
            <S.IconWrapper>
                <IconComponent alt={`Ícone ${paymentMethodName[props.paymentMethodIcon]}`} />
            </S.IconWrapper>
            {props.paymentMethodDescription ? <S.ContentLabel>{props.paymentMethodDescription}</S.ContentLabel> : null}
        </S.MainWrapper>
    );
};

PaymentMethodItem.propTypes = {
    /** Título do método de pagamento. */
    paymentMethod: Proptypes.string.isRequired,

    /** Descrição do método de pagamento.  */
    paymentMethodDescription: Proptypes.string,

    /** Ícone que deve ser usado no item de método de pagamento. */
    paymentMethodIcon: Proptypes.oneOf(Object.keys(paymentMethodIcon)).isRequired,

    /** Função que deve ser disparada ao declarar a propriedade onClick. */
    onClick: Proptypes.func,
};

export default PaymentMethodItem;
