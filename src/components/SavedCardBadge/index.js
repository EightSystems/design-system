import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

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

const SavedCardBadge = props => {
    const IconComponent = brandIconMapping[props.cardBrand.toLowerCase()];

    return (
        <S.MainWrapper {...props} onClick={props.onClick}>
            <S.ContentWrapperRow>
                <S.IconWrapper>
                    <IconComponent alt={`Ícone ${brandNameMapping[props.cardBrand.toLowerCase()]}`} />
                </S.IconWrapper>
                <S.ContentWrapperColumn>
                    <S.HighlightedContentLabel>
                        {brandNameMapping[props.cardBrand.toLowerCase()]} terminado em {props.cardLastDigits}
                    </S.HighlightedContentLabel>
                    {props.cardIdentifier ? <S.ContentLabel>{props.cardIdentifier}</S.ContentLabel> : null}
                </S.ContentWrapperColumn>
            </S.ContentWrapperRow>
            <S.IconWrapper>
                <BiChevronRight className="arrow-icon" />
            </S.IconWrapper>
        </S.MainWrapper>
    );
};

SavedCardBadge.propTypes = {
    cardBrand: Proptypes.oneOf(Object.keys(brandNameMapping)).isRequired,
    cardIdentifier: Proptypes.string,
    cardLastDigits: Proptypes.string.isRequired,
    onClick: Proptypes.func,
};

export default SavedCardBadge;
