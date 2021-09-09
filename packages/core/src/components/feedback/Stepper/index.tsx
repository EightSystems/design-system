import React, { useContext } from "react";

import { ThemeContext } from "styled-components";

import { theme } from "../../../theme";
import { ProgressRing } from "../ProgressRing";
import * as S from "./styled";
import { StepperProps } from "./types";

const Stepper = React.forwardRef((props: StepperProps, componentRef) => {
    const themeContext = useContext<typeof theme>(ThemeContext);

    return (
        <S.StepperContainer {...props} className={props.className} ref={componentRef}>
            <ProgressRing
                progress={props.currentStepPercentage}
                radius={30}
                stroke={3}
                strokeColor={themeContext.colors.secondary}
                text={`${props.currentStep} de ${props.maxSteps}`}
                textColor={themeContext.colors.secondary}
                textFontSize={12}
                textXAxis={12}
                textYAxis={34}
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
