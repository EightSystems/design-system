import React from "react";
import Proptypes from "prop-types";

import { theme } from "../../../theme";
import ProgressRing from "../ProgressRing";
import * as S from "./styled";

const Stepper = React.forwardRef(({ children, ...props }, componentRef) => (
    <S.StepperContainer {...props} className={props.className} ref={componentRef}>
        <ProgressRing
            progress={props.currentStepPercentage}
            radius={30}
            stroke={3}
            strokeColor={theme.colors.secondary}
            text={`${props.currentStep} de ${props.maxSteps}`}
            textColor={theme.colors.secondary}
            textFontSize={12}
            textXAxis={12}
            textYAxis={34}
        />
        <S.TextContainer>
            <S.ActiveStepLabel>{props.activeStepLabel}</S.ActiveStepLabel>
            {props.nextStepLabel ? <S.NextStepLabel>Próximo: {props.nextStepLabel}</S.NextStepLabel> : null}
        </S.TextContainer>
    </S.StepperContainer>
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
