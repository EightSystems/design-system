import React from "react";
import Proptypes from "prop-types";
import Dinero from "dinero.js";
import * as S from "./styled";
import getUserLanguage from "../../../utils/getUserLanguage";
import CurrencyList from "./currencyList.json";
require("intl");

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} currency
 * @property {number} value
 * @property {number} size
 * @property {string} sizeUnit
 * @property {string} color
 */
const CurrencyLabel = ({ currency, value, size, sizeUnit, color, props }) => {
    const currencyUnit = Dinero({ amount: value, currency, precision: CurrencyList[currency] }).toUnit();

    return (
        <S.CurrencyLabelWrapper {...props} size={size} sizeUnit={sizeUnit} data-color={color}>
            {new Intl.NumberFormat(getUserLanguage(), { style: "currency", currency }).format(currencyUnit)}
        </S.CurrencyLabelWrapper>
    );
};

CurrencyLabel.defaultProps = {
    sizeUnit: "px",
};

CurrencyLabel.propTypes = {
    /** The monetary unit that will be used in the conversion. The possible values are ISO 4217 currency codes,
     * like "USD" for the American dollar, or "BRL" for Brazillian real. You can look at the availbale currency codes
     * [here](https://www.currency-iso.org/dam/downloads/lists/list_one.xml) */
    currency: Proptypes.string.isRequired,

    /** The value that will be used in the conversion, in numeric format. */
    value: Proptypes.number.isRequired,

    /** If specified, defines the font size along with the unit given in the `sizeUnit` prop. */
    size: Proptypes.number,

    /** If specified, defines the unit to be used with the `size` prop. */
    sizeUnit: Proptypes.oneOf(["px", "em", "%"]),

    /** Color that will be used on the text string. */
    color: Proptypes.string,
};

export default CurrencyLabel;
