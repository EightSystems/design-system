export type ValidationProps = {
    hideValidationContainer?: boolean;

    /** Caso seja `true`, o input indicará um erro, e a mensagem definida em `validationMessage` será exibida abaixo do input. Essa informação é geralmente obtida através do controlador de formulário.*/
    validationError?: boolean;

    /** Caso seja `true` o input indicará sucesso. */
    validationSuccess?: boolean;

    /** Caso seja especificado, será mostrado abaixo do input sempre que a propriedade `validationError` for `true`*/
    validationMessage?: string;
};
