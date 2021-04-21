import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";

import { ReactComponent as CreditCardSvg } from "../../assets/icons/credit-card.svg";
import { ReactComponent as BankSlipSvg } from "../../assets/icons/bank-slip.svg";

const paymentMethodIcon = {
    creditCard: CreditCardSvg,
    bankSlip: BankSlipSvg,
};

const paymentMethodName = {
    creditCard: "Cartão de crédito",
    bankSlip: "Boleto bancário",
};

const MainWrapper = styled.div`
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${V.Border.default};
    border-radius: 4px;
    padding: ${V.Space.default} ${V.Space.default};
    cursor: pointer;
    transition: 150ms ease-in-out;

    :hover {
        border: ${V.Border.hover};
        box-shadow: ${V.BoxShadow.default};
    }
`;
const IconWrapper = styled.div`
    img,
    svg {
        width: ${V.Space.lg};
        height: ${V.Space.lg};
        color: var(--primaryTint);
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
        <MainWrapper {...props}>
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
};

export default PaymentMethodItem;
