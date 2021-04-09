import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as T from "../../styles/typography";
import getUserLanguage from "../../utils/getUserLanguage";

require('intl')

const CurrencyLabelWrapper = styled.h1`
    ${T.CurrencyLabel};
`;

const CurrencyLabel = ({ currency, value, size }) => {
    return (
        <CurrencyLabelWrapper>
            {new Intl.NumberFormat(`${getUserLanguage()}`, { style: "currency", currency: `${currency}` }).format(
                value
            )}
        </CurrencyLabelWrapper>
    );
};

CurrencyLabel.propTypes = {
    currency: Proptypes.string.isRequired,
    value: Proptypes.number.isRequired,
    size: Proptypes.number,
};

export default CurrencyLabel;
