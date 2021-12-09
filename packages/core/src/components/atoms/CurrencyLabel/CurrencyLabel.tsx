import Dinero from "dinero.js";
import * as React from "react";
import getUserLanguage from "../../../utils/getUserLanguage";
import { Text } from "../../typography/Text";
import CurrencyList from "./currencyList.json";
import { CurrencyLabelProps } from "./types";

const CurrencyLabel = ({
    currency,
    value,
    textColor = "dark",
    fontSize = "lg",
    fontFace = "primary",
    fontWeight = "normal",
    ...otherProps
}: CurrencyLabelProps) => {
    const precision = "0".repeat(CurrencyList[currency]);
    const currencyUnit = Dinero({ amount: value, currency, precision: CurrencyList[currency] })
        .setLocale(getUserLanguage())
        .toFormat("$0,0" + (precision.length > 0 ? "." : "") + precision);

    return (
        <Text textColor={textColor} fontSize={fontSize} fontFace={fontFace} fontWeight={fontWeight} {...otherProps}>
            {currencyUnit}
        </Text>
    );
};

export default CurrencyLabel;
