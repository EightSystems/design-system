import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import { BiChevronRight } from "react-icons/bi";

const brandIconMapping = {
    amex: require("../../assets/icons/american-express.svg"),
    "american-express": require("../../assets/icons/american-express.svg"),
    cirrus: require("../../assets/icons/cirrus.svg"),
    diners: require("../../assets/icons/diners.svg"),
    discover: require("../../assets/icons/discover.svg"),
    elo: require("../../assets/icons/elo.svg"),
    hiper: require("../../assets/icons/hiper.svg"),
    jcb: require("../../assets/icons/jcb.svg"),
    mastercard: require("../../assets/icons/mastercard.svg"),
    maestro: require("../../assets/icons/maestro.svg"),
    "visa-electron": require("../../assets/icons/visa-electron.svg"),
    visa: require("../../assets/icons/visa.svg"),
};

const brandNameMapping = {
    amex: "American Express",
    "american-express": "American Express",
    cirrus: "Cirrus",
    diners: "Diners Club",
    discover: "Discover",
    elo: "ELO",
    hiper: "Hipercard",
    jcb: "JCB",
    mastercard: "MasterCard",
    maestro: "Maestro",
    "visa-electron": "Visa Electron",
    visa: "Visa",
};

const MainWrapper = styled.div`
    background: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${V.Border.default};
    border-radius: 4px;
    padding: ${V.Space.default} ${V.Space.default};
    cursor: pointer;
    transition: 150ms ease-in-out;

    :hover {
        border: ${V.Border.hover};
        box-shadow: ${V.BoxShadow.default};
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
    display: flex;
    align-items: center;
    img,
    svg {
        width: ${V.Space.lg};
        height: ${V.Space.lg};
        color: var(--secondary);
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
                    <img
                        src={brandIconMapping[props.cardBrand.toLowerCase()]}
                        alt={`Ícone ${brandNameMapping[props.cardBrand.toLowerCase()]}`}
                    />
                </IconWrapper>
                <ContentWrapperColumn>
                    <HighlightedContentLabel>
                        {brandNameMapping[props.cardBrand.toLowerCase()]} terminado em {props.cardLastDigits}
                    </HighlightedContentLabel>
                    {props.cardIdentifier ? <ContentLabel>{props.cardIdentifier}</ContentLabel> : null}
                </ContentWrapperColumn>
            </ContentWrapperRow>
            <IconWrapper>
                <BiChevronRight className="arrow-icon" />
            </IconWrapper>
        </MainWrapper>
    );
};

SavedCardBadge.propTypes = {
    cardBrand: Proptypes.oneOf(Object.keys(brandNameMapping)).isRequired,
    cardIdentifier: Proptypes.string,
    cardLastDigits: Proptypes.string.isRequired,
    onClick: Proptypes.func,
};

export default SavedCardBadge;
