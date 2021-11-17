import React from "react";

export type StepperProps = {
    /** String de texto que deve ser exibido na etapa atual */
    activeStepLabel: string;

    /** String de texto que deve ser exibido como próxima etapa. */
    nextStepLabel?: string;

    /** Porcentagem que deve ser usada no anél de progresso do Stepper. */
    currentStepPercentage: number;

    /** Número do passo atual. */
    currentStep: number;

    /** Número total de passos presentes no contexto atual. */
    maxSteps: number;

    className?: string;
    style?: any;
};
