import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as V from "../../styles/variables";

import Avatar from "../Avatar";
import CurrencyLabel from "../CurrencyLabel";

const PaymentPrompWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PromptLabel = styled.p`
    color: var(--text-body);
    font-family: ${V.FontFaces.Inter};
    font-size: 20px;
    text-align: center;

    margin-top: ${V.Space.default};
    margin-bottom: ${V.Space.default};
`;

const PaymentPrompt = props => {
    return (
        <PaymentPrompWrapper>
            {props.avatarSrc ? (
                <Avatar src={props.avatarSrc} size={props.avatarSize} alt={props.avatarAlt} />
            ) : (
                <Avatar alt={props.avatarAlt} size={props.avatarSize}>
                    {props.avatarChildren}
                </Avatar>
            )}
            <PromptLabel>{props.promptLabel}</PromptLabel>
            <CurrencyLabel
                currency={props.currency}
                size={props.currencySize}
                sizeUnit={props.currencySizeUnit}
                value={props.currencyValue}
            />
        </PaymentPrompWrapper>
    );
};

PaymentPrompt.defaultProps = {
    currencySizeUnit: "px",
};

PaymentPrompt.propTypes = {
    /** Texto que deve ser usado na label central, pode ser uma descrição de ação ou uma mensagem do usuário. */
    promptLabel: Proptypes.string.isRequired,

    /** Usado para renderizar ícones ou elementos de texto dentro do Avatar se `src` não estiver definido. Pode ser um elemento ou apenas uma string. */
    avatarChildren: Proptypes.node,

    /** Usado em combinação com `src` para prover um atributo `alt` para o elemento `img`, caso haja uma imagem. */
    avatarAlt: Proptypes.string,

    /** O atributo `src` do elemento `img` no Avatar */
    avatarSrc: Proptypes.string,

    /** Define o tamanho do avatar dentro do componente. */
    avatarSize: Proptypes.oneOf(["large", "medium", "small"]).isRequired,

    /** A unidade monetária que deve ser utilizada na conversão. Os valores possíveis são os códigos de moeda ISO 4217, como "USD" para o dólar americado, ou "BRL" para o real brasileiro. Consulte a lista de moedas disponíveis [aqui](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** Caso seja especificado, define o tamanho da fonte junto com a unidade de `sizeUnit`. */
    currencyValue: Proptypes.number.isRequired,

    /** Caso seja especificado, define o tamanho da fonte junto com a unidade de `sizeUnit`. */
    currencySize: Proptypes.number,

    /** Caso seja especificado, define a unidade a ser usada em conjunto com `size`. */
    currencySizeUnit: Proptypes.oneOf(["px", "em", "%"]),
};

export default PaymentPrompt;
