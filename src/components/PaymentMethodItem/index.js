import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";

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
    picpay: "PicPay"
};

const MainWrapper = styled.button`
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${V.Border.default};
    border-radius: 4px;
    padding: ${V.Space.default} ${V.Space.default};
    cursor: pointer;
    transition: 150ms ease-in-out;

    :hover,
    :focus {
        border: ${V.Border.hover};
        box-shadow: ${V.BoxShadow.default};
        outline: none;
    }
`;
const IconWrapper = styled.div`
    img,
    svg {
        width: ${V.Space.xxlg};
        height: ${V.Space.lg};
        color: var(--white);
    }
`;
const ContentLabel = styled.p`
    color: var(--text-primary);
    text-align: center;
    font-family: ${V.FontFaces.Inter};
    font-size: 16px;
`;
const ContentTitle = styled(ContentLabel)`
    font-weight: 700;
`;

const PaymentMethodItem = props => {
    const IconCompoment = paymentMethodIcon[props.paymentMethodIcon];

    return (
        <MainWrapper {...props} onClick={props.onClick}>
            <ContentTitle>{props.paymentMethod}</ContentTitle>
            <IconWrapper>
                <IconCompoment alt={`Ícone ${paymentMethodName[props.paymentMethodIcon]}`} />
            </IconWrapper>
            {props.paymentMethodDescription ? <ContentLabel>{props.paymentMethodDescription}</ContentLabel> : null}
        </MainWrapper>
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
