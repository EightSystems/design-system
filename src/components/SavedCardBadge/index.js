import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import { BiChevronRight } from "react-icons/bi";
import { FaCcVisa } from "react-icons/fa"
import "../../assets/icons/mastercard.svg";

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
    svg {
        color: var(--primaryTint);
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
        <MainWrapper>
            <ContentWrapperRow>
                <IconWrapper>
                    <FaCcVisa />
                </IconWrapper>
                <ContentWrapperColumn>
                    <HighlightedContentLabel>
                        {props.cardBrand} terminado em {props.cardLastDigits}
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

export default SavedCardBadge;
