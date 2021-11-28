import React from "react";
import { ProgressRing } from "../ProgressRing";
import * as S from "./styled";
import { StepperProps } from "./types";

const Stepper = React.forwardRef((props: StepperProps, componentRef) => {
    return (
        <S.StepperContainer {...props} className={props.className} ref={componentRef}>
            <ProgressRing
                progress={props.currentStepPercentage}
                radius={35}
                stroke={3}
                strokeColor={"secondary"}
                text={`${props.currentStep} de ${props.maxSteps}`}
                textColor={"secondary"}
                textFontSize={"xxs"}
            />
            <S.TextContainer>
                <S.ActiveStepLabel>{props.activeStepLabel}</S.ActiveStepLabel>
                {props.nextStepLabel ? <S.NextStepLabel>Próximo: {props.nextStepLabel}</S.NextStepLabel> : null}
            </S.TextContainer>
        </S.StepperContainer>
    );
});

export { Stepper };
export type { StepperProps };
