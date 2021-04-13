import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as V from "../../styles/variables";

const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StepIcon = styled.svg`
    color: var(--secondary);
    width: 12px;
    height: 12px;
    user-select: none;
    svg {
        width: 12px;
        height: 12px;
    }
`;
const StepConnector = styled.div`
    flex: 1 1 auto;
    top: 47px;
    left: calc(-50% + 20px);
    right: calc(50% + 20px);
    position: absolute;
    span {
        display: block;
        border-top-style: solid;
        border-top-width: 1px;
        border-color: var(--gray);
    }
`;
const LabelContainer = styled.span`
    font-family: ${V.FontFaces.Poppins};
    font-size: 14px;
    font-weight: 500;
    margin-top: 12px;
    max-width: 250px;
    text-align: center;
    color: var(--text-primary);

    &[data-isActive="true"] {
        font-weight: 700;
        color: var(--secondary);
    }
`;

const Step = props => {
    return (
        <React.Fragment>
            {props.stepIsFirst ? null : (
                <StepConnector>
                    <span />
                </StepConnector>
            )}
            <StepContainer>
                <StepIcon>
                    <circle cx="6" cy="6" r="6"></circle>
                </StepIcon>
                <LabelContainer data-isActive={props.stepIsActive}>{props.stepLabel}</LabelContainer>
            </StepContainer>
        </React.Fragment>
    );
};

Step.propTypes = {
    /** Rótulo que identifica a etapa atual. */
    stepLabel: Proptypes.string.isRequired,

    /** Caso seja `false`, a linha de continuidade entre o stepper não será renderizada. */
    stepIsFirst: Proptypes.bool.isRequired,

    /** Caso seja `true`, o step será destacado como ativo. */
    stepIsActive: Proptypes.bool.isRequired,
};

export default Step;
