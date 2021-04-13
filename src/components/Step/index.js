import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import * as V from "../../styles/variables";
import { MdDone } from "react-icons/md"

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
    &[data-isActive="true"] {
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

    &[data-isActive="true"] {
        font-weight: 700;
        color: var(--secondary);
    }
`;

const Step = props => {
    return (
        <React.Fragment>
            <StepContainer>
                <StepIcon data-isActive={props.stepIsActive}>
                    <circle cx="6" cy="6" r="6"></circle>
                    {props.stepIsFinished ? (<MdDone />) : (<text>{props.stepNumber}</text>)}
                </StepIcon>
                <LabelContainer data-isActive={props.stepIsActive}>{props.stepLabel}</LabelContainer>
            </StepContainer>
        </React.Fragment>
    );
};

Step.propTypes = {
    /** Rótulo que identifica a etapa atual. */
    stepLabel: Proptypes.string.isRequired,

    /** Caso seja `true`, o step será destacado como ativo. */
    stepIsActive: Proptypes.bool.isRequired,

    /** Caso seja `true`, o step será destacado com um ícone que indica a conclusão da etapa. */
    stepIsFinished: Proptypes.bool.isRequired,

    /** Identifica o número da etapa quando ela ainda não foi concluída. */
    stepNumber: Proptypes.number.isRequired,
};

export default Step;
