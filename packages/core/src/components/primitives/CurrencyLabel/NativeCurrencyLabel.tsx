import * as React from "react";
import Dinero from "dinero.js";
import { CurrencyLabelProps } from "./types";
import * as S from "./styled.native";
import CurrencyList from "./currencyList.json";
import { getLocales } from "react-native-localize";

const deviceLocale = getLocales();

const CurrencyLabel = React.forwardRef<any, CurrencyLabelProps>(
    ({ currency, value, textColor = "dark", fontSize = "lg", fontFace = "primary", ...props }, componentRef) => {
        const locale = deviceLocale[0];

        const precision = "0".repeat(CurrencyList[currency]);
        const currencyUnit = Dinero({ amount: value, currency, precision: CurrencyList[currency] })
            .setLocale(locale.languageTag)
            .toFormat("$0,0" + (precision.length > 0 ? "." : "") + precision);

        return (
            <S.CurrencyLabelWrapper
                data-fontsize={fontSize}
                data-textcolor={textColor}
                data-fontface={fontFace}
                {...props}
                ref={componentRef}
            >
                {/* Locale is mocked as "pt-BR" until the function to determinate the user locale is built */}
                {currencyUnit}
            </S.CurrencyLabelWrapper>
        );
    }
);

export default React.memo(CurrencyLabel);
