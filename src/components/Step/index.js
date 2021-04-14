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
    color: var(--text-body);
    width: 12px;
    height: 12px;
    user-select: none;
    svg {
        width: 12px;
        height: 12px;
    }
    &[data-active="true"] {
        color: var(--secondary);
    }
`;
const LabelContainer = styled.span`
    font-family: ${V.FontFaces.Poppins};
    font-size: 14px;
    font-weight: 500;
    margin-top: 12px;
    max-width: 250px;
    text-align: center;
    color: var(--text-body);

    &[data-active="true"] {
        font-weight: 700;
        color: var(--secondary);
    }
`;

const Step = props => {
    return (
        <StepContainer {...props}>
            <StepIcon data-active={props.active}>
                <circle cx="6" cy="6" r="6"></circle>
            </StepIcon>
            <LabelContainer data-active={props.active}>{props.label}</LabelContainer>
        </StepContainer>
    );
};

Step.propTypes = {
    /** Rótulo que identifica a etapa atual. */
    label: Proptypes.node.isRequired,

    /** Caso seja `true`, o step será destacado como ativo. */
    active: Proptypes.bool
};

export default Step;
