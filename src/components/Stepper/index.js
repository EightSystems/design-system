import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import * as V from "../../styles/variables";
import media from "../../styles/media";

import ProgressRing from "../ProgressRing";

const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    ${media.tablet`
        justify-content: flex-start;
    `};
`;
const TextContainer = styled.div`
    padding-left: var(--space-xs);
`;
const ActiveStepLabel = styled.h1`
    color: var(--text-primary);
    font-family: ${V.FontFaces.Poppins};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    ${media.tablet`
        font-size: 16px;
    `};
`;
const NextStepLabel = styled.h2`
    color: var(--text-body);
    font-family: ${V.FontFaces.Poppins};
    font-size: 16px;
    ${media.tablet`
        font-size: 14px;
    `};
`;

const Stepper = React.forwardRef(({ children, ...props }, componentRef) => (
    <StepperContainer {...props} className={props.className} ref={componentRef}>
        <ProgressRing
            progress={props.currentStepPercentage}
            radius={30}
            stroke={3}
            strokeColor={V.Color.secondary}
            text={`${props.currentStep} de ${props.maxSteps}`}
            textColor={V.Color.secondary}
            textFontSize={12}
            textXAxis={12}
            textYAxis={34}
        />
        <TextContainer>
            <ActiveStepLabel>{props.activeStepLabel}</ActiveStepLabel>
            {props.nextStepLabel ? <NextStepLabel>Próximo: {props.nextStepLabel}</NextStepLabel> : null}
        </TextContainer>
    </StepperContainer>
));

Stepper.propTypes = {
    /** String de texto que deve ser exibido na etapa atual */
    activeStepLabel: Proptypes.string.isRequired,

    /** String de texto que deve ser exibido como próxima etapa. */
    nextStepLabel: Proptypes.string,

    /** Porcentagem que deve ser usada no anél de progresso do Stepper. */
    currentStepPercentage: Proptypes.number.isRequired,

    /** Número do passo atual. */
    currentStep: Proptypes.number.isRequired,

    /** Número total de passos presentes no contexto atual. */
    maxSteps: Proptypes.number.isRequired,
};

export default Stepper;
