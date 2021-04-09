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

CurrencyLabel.propTypes = {
    currency: Proptypes.string.isRequired,
    value: Proptypes.number.isRequired,
    size: Proptypes.number,
    sizeUnit: Proptypes.oneOf(['px', 'em', '%']),
};

export default CurrencyLabel;
