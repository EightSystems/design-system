import React from "react";

export type SelectProps = {
    /** Os elementos de opção para preencher o `select`. Devem ser `<Option>` vindo do próprio componente. */
    children: React.ReactNode;

    /** Atributo de nome do elemento `<select>`. Por padrão, o nome também será repassado para o atributo `for` do elemento `<label>`. */
    name: string;

    /** String que deve ser repassada para o elemento `<label>`. */
    label: string;

    /** A dica curta exibida na entrada antes que o usuário insira um valor. */
    placeholder?: string;

    required?: boolean;

    /** Caso seja `true`, o input indicará um erro, e a mensagem definida em `validationMessage` será exibida abaixo do input. Essa informação é geralmente obtida através do controlador de formulário.*/
    validationError?: boolean;

    /** Caso seja `true` o input indicará sucesso. */
    validationSuccess?: boolean;

    /** Caso seja especificado, será mostrado abaixo do input sempre que a propriedade `validationError` for `true`*/
    validationMessage?: string;

    optionsCancelMessage?: string;
};

export type NativeOptionProps = {
    disabled?: boolean;
    selected?: boolean;
    value: any;
    label?: any;
    children: React.ReactNode;
};
