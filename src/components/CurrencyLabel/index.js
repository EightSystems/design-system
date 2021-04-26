import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import Dinero from "dinero.js";

import * as V from "../../styles/variables";
import getUserLanguage from "../../utils/getUserLanguage";

import CurrencyList from "./currencyList.json";

require("intl");

const CurrencyLabelWrapper = styled.h1`
    font-family: ${V.FontFaces.Poppins};
    font-size: 36px;
    font-weight: 700;
    ${props => (props.size ? `font-size: ${props.size}${props.sizeUnit}` : "")};

    &[data-color="light"] {
        color: var(--primaryContrast);
    }
    &[data-color="dark"] {
        color: var(--text-primary);
    }
`;

const CurrencyLabel = ({ currency, value, size, sizeUnit, color }) => {
    const currencyUnit = Dinero({ amount: value, currency, precision: CurrencyList[currency] }).toUnit();

    return (
        <CurrencyLabelWrapper {...props} size={size} sizeUnit={sizeUnit} data-color={color}>
            {new Intl.NumberFormat(getUserLanguage(), { style: "currency", currency }).format(currencyUnit)}
        </CurrencyLabelWrapper>
    );
};

CurrencyLabel.defaultProps = {
    sizeUnit: "px",
};

CurrencyLabel.propTypes = {
    /** A unidade monetária que deve ser utilizada na conversão. Os valores possíveis são os códigos de moeda ISO 4217, como "USD" para o dólar americado, ou "BRL" para o real brasileiro. Consulte a lista de moedas disponíveis [aqui](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** O valor monetário puro que deve ser utilizado na conversão, em formato numérico. */
    value: Proptypes.number.isRequired,

    /** Caso seja especificado, define o tamanho da fonte junto com a unidade de `sizeUnit`. */
    size: Proptypes.number,

    /** Caso seja especificado, define a unidade a ser usada em conjunto com `size`. */
    sizeUnit: Proptypes.oneOf(["px", "em", "%"]),

    /** Cor que deve ser usada na string de texto. */
    color: Proptypes.string,
};

export default CurrencyLabel;
