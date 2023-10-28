import React from "react";
import { ButtonProps } from "../Button/types";
import { ValidationProps } from "../types";
import { ColorTypes } from "../../../theme/types";

export type OptionProps = {
    disabled?: boolean;
    selected?: boolean;
    value: any;
    label?: any;
    children: React.ReactNode;
};

export type OptionElement = React.ReactElement<OptionProps>;

export type SelectProps = ValidationProps & {
    /** Os elementos de opção para preencher o `select`. Devem ser `<Option>` vindo do próprio componente. */
    children: OptionElement | OptionElement[];

    /** Atributo de nome do elemento `<select>`. Por padrão, o nome também será repassado para o atributo `for` do elemento `<label>`. */
    name: string;

    /** String que deve ser repassada para o elemento `<label>`. */
    label?: string;

    /** A dica curta exibida na entrada antes que o usuário insira um valor. */
    placeholder?: string;

    required?: boolean;

    optionsCancelMessage?: string;

    onChange?: (value: any) => void;
    onBlur?: () => void;
    onFocus?: () => void;

    /** Selected value */
    value?: any;

    borderRadius?: ButtonProps["borderRadius"];
    borderPosition?: ButtonProps["borderPosition"];
    borderType?: ButtonProps["borderType"];
    borderColor?: ButtonProps["borderColor"];

    backgroundColor?: ColorTypes;
    textColor?: ColorTypes;
    menuTextColor?: ColorTypes;
};
