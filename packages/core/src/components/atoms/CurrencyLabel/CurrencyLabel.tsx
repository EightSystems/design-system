import Dinero from "dinero.js";
import React from "react";
import getUserLanguage from "../../../utils/getUserLanguage";
import CurrencyList from "./currencyList.json";
import * as S from "./styled";
import { WebCurrencyLabelProps } from "./types";

const CurrencyLabel = React.forwardRef<HTMLHeadingElement, WebCurrencyLabelProps>(
    (
        { currency, value, textColor = "dark", fontSize = "lg", fontFace = "primary", fontWeight = "normal", ...props },
        componentRef
    ) => {
        const precision = "0".repeat(CurrencyList[currency]);
        const currencyUnit = Dinero({ amount: value, currency, precision: CurrencyList[currency] })
            .setLocale(getUserLanguage())
            .toFormat("$0,0" + (precision.length > 0 ? "." : "") + precision);

        return (
            <S.CurrencyLabelWrapper
                data-fontsize={fontSize}
                data-textcolor={textColor}
                data-fontface={fontFace}
                data-fontweight={fontWeight}
                {...props}
                ref={componentRef}
            >
                {currencyUnit}
            </S.CurrencyLabelWrapper>
        );
    }
);

export default CurrencyLabel;
