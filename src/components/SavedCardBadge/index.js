import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import { BiChevronRight } from "react-icons/bi";

const brandIconMapping = {
    'amex': require('../../assets/icons/american-express.svg'),
    'american-express': require('../../assets/icons/american-express.svg'),
    'cirrus': require('../../assets/icons/cirrus.svg'),
    'diners': require('../../assets/icons/diners.svg'),
    'discover': require('../../assets/icons/discover.svg'),
    'elo': require('../../assets/icons/elo.svg'),
    'hiper': require('../../assets/icons/hiper.svg'),
    'jcb': require('../../assets/icons/jcb.svg'),
    'mastercard': require('../../assets/icons/mastercard.svg'),
    'maestro': require('../../assets/icons/maestro.svg'),
    'visa-electron': require('../../assets/icons/visa-electron.svg'),
    'visa': require('../../assets/icons/visa.svg'),
}

const brandNameMapping = {
    'amex': 'American Express',
    'american-express': 'American Express',
    'cirrus': 'Cirrus',
    'diners': 'Diners Club',
    'discover': 'Discover',
    'elo': 'ELO',
    'hiper': 'Hipercard',
    'jcb': 'JCB',
    'mastercard': 'MasterCard',
    'maestro': 'Maestro',
    'visa-electron': 'Visa Electron',
    'visa': 'Visa',
}

// @WIP: This component is not yet finished, does not have a well-defined API, and it's not ready for production use.
// @todo: Storybook can't handle SVG parsing as of now due to custom webpack-config. Will have to look into it later for the custom CcBrand Icons.

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1.5px var(--gray);
    border-radius: 4px;
    padding: ${V.Space.default} ${V.Space.default};
    max-width: 500px;
    cursor: pointer;
    transition: 150ms ease-in-out;

    :hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 50, 0.1);
    }
`;
const ContentWrapperRow = styled.div`
    display: flex;
    flex-direction: row;
`;
const ContentWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${V.Space.sm};
`;
const IconWrapper = styled.div`
    img {
        width: ${V.Space.lg};
        height: ${V.Space.lg};
    }
`;
const ContentLabel = styled.p`
    color: var(--text-primary);
    font-family: ${V.FontFaces.Inter};
    font-size: 16px;
`;
const HighlightedContentLabel = styled(ContentLabel)`
    font-weight: 700;
`;

const SavedCardBadge = props => {
    return (
        <MainWrapper onClick={props.onClick}>
            <ContentWrapperRow>
                <IconWrapper>
                    <img src={brandIconMapping[props.cardBrand.toLowerCase()]} />
                </IconWrapper>
                <ContentWrapperColumn>
                    <HighlightedContentLabel>
                        {brandNameMapping[props.cardBrand.toLowerCase()]} terminado em {props.cardLastDigits}
                    </HighlightedContentLabel>
                    {props.cardIdentifier ? <ContentLabel>{props.cardIdentifier}</ContentLabel> : null}
                </ContentWrapperColumn>
            </ContentWrapperRow>
            <IconWrapper>
                <BiChevronRight className="arrow-icon"/>
            </IconWrapper>
        </MainWrapper>
    );
};

SavedCardBadge.propTypes = {
    cardBrand: Proptypes.oneOf(Object.keys(brandNameMapping)).isRequired,
    cardIdentifier: Proptypes.string,
    cardLastDigits: Proptypes.string.isRequired,
    onClick: Proptypes.func
}

export default SavedCardBadge;
