import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import { BiChevronRight } from "react-icons/bi";

import { ReactComponent as AmexSvg } from "../../assets/icons/american-express.svg";
import { ReactComponent as CirrusSvg } from "../../assets/icons/cirrus.svg";
import { ReactComponent as DinersSvg } from "../../assets/icons/diners.svg";
import { ReactComponent as DiscoverSvg } from "../../assets/icons/discover.svg";
import { ReactComponent as EloSvg } from "../../assets/icons/elo.svg";
import { ReactComponent as HiperSvg } from "../../assets/icons/hiper.svg";
import { ReactComponent as JcbSvg } from "../../assets/icons/jcb.svg";
import { ReactComponent as MastercardSvg } from "../../assets/icons/mastercard.svg";
import { ReactComponent as MaestroSvg } from "../../assets/icons/maestro.svg";
import { ReactComponent as VisaElectronSvg } from "../../assets/icons/visa-electron.svg";
import { ReactComponent as VisaSvg } from "../../assets/icons/visa.svg";

const brandIconMapping = {
    amex: AmexSvg,
    "american-express": AmexSvg,
    cirrus: CirrusSvg,
    diners: DinersSvg,
    discover: DiscoverSvg,
    elo: EloSvg,
    hiper: HiperSvg,
    jcb: JcbSvg,
    mastercard: MastercardSvg,
    maestro: MaestroSvg,
    "visa-electron": VisaElectronSvg,
    visa: VisaSvg,
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

const MainWrapper = styled.button`
    background: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${V.Border.default};
    border-radius: 4px;
    padding: ${V.Space.default} ${V.Space.default};
    cursor: pointer;
    transition: 150ms ease-in-out;
    user-select: none;

    :hover,
    :focus {
        border: ${V.Border.hover};
        box-shadow: ${V.BoxShadow.default};
        outline: none;
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
    text-align: left;
`;
const HighlightedContentLabel = styled(ContentLabel)`
    font-weight: 700;
`;

const SavedCardBadge = props => {
    const IconCompoment = brandIconMapping[props.cardBrand.toLowerCase()];

    return (
        <MainWrapper onClick={props.onClick}>
            <ContentWrapperRow>
                <IconWrapper>
                    <IconCompoment alt={`Ícone ${brandNameMapping[props.cardBrand.toLowerCase()]}`} />
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
