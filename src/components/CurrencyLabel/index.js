import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as T from "../../styles/typography";
import getUserLanguage from "../../utils/getUserLanguage";

require('intl')

const CurrencyLabelWrapper = styled.h1`
    ${T.CurrencyLabel};
    ${props => props.size ? `font-size: ${props.size}${props.sizeUnit}` : ''};
`;

const CurrencyLabel = ({ currency, value, size, sizeUnit }) => {
    return (
        <CurrencyLabelWrapper size={size} sizeUnit={sizeUnit}>
            {new Intl.NumberFormat(getUserLanguage(), { style: "currency", currency }).format(
                value
            )}
        </CurrencyLabelWrapper>
    );
};

CurrencyLabel.defaultProps = {
  sizeUnit: 'px'
};

// - `size(number)` - O tamanho da fonte na unidade abaixo, caso não seja enviado, o tamanho padrão do tema é usado.
// - `sizeUnit(['px', 'em', '%'])` - A unidade do tamanho da fonte, por padrão é em `px`

CurrencyLabel.propTypes = {
    /** A unidade monetária que deve ser utilizada na conversão. Os valores possíveis são os códigos de moeda ISO 4217, como "USD" para o dólar americado, ou "BRL" para o real brasileiro. Consulte a lista de moedas disponíveis [aqui](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** O valor monetário puro que deve ser utilizado na conversão, em formato numérico. */
    value: Proptypes.number.isRequired,

    /** Caso seja especificado, define o tamanho da fonte junto com a unidade de `sizeUnit`. */
    size: Proptypes.number,

    /** Caso seja especificado, define a unidade a ser usada em conjunto com `size`. */
    sizeUnit: Proptypes.oneOf(['px', 'em', '%']),
};

export default CurrencyLabel;
