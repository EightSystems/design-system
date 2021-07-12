import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

import Avatar from "../Avatar";
import CurrencyLabel from "../CurrencyLabel";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} label
 * @property {any} avatarChildren
 * @property {string} avatarAlt
 * @property {string} avatarSrc
 * @property {string} avatarSize
 * @property {string} currency
 * @property {number} currencyValue
 * @property {number} currencySize
 * @property {string} currencySizeUnit
 */
const PaymentPrompt = ({
    label,
    avatarChildren,
    avatarAlt,
    avatarSrc,
    avatarSize,
    currency,
    currencyValue,
    currencySize,
    currencySizeUnit,
    props,
}) => {
    return (
        <S.PaymentPromptWrapper {...props}>
            {avatarSrc ? (
                <Avatar src={avatarSrc} size={avatarSize} alt={avatarAlt} />
            ) : (
                <Avatar alt={avatarAlt} size={avatarSize}>
                    {avatarChildren}
                </Avatar>
            )}
            <S.PromptLabel>{label}</S.PromptLabel>
            <CurrencyLabel currency={currency} size={currencySize} sizeUnit={currencySizeUnit} value={currencyValue} />
        </S.PaymentPromptWrapper>
    );
};

PaymentPrompt.defaultProps = {
    currencySizeUnit: "px",
};

PaymentPrompt.propTypes = {
    /** Texto que deve ser usado na label central, pode ser uma descrição de ação ou uma mensagem do usuário. */
    label: Proptypes.string.isRequired,

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
