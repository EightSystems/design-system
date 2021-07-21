import React from "react";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import classnames from "classnames";

import { MdInfo } from "react-icons/md";
import * as S from "./styled";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {number} name
 * @property {string} label
 * @property {string} placeholder
 * @property {string} validationError
 * @property {number} validationSuccess
 * @property {number} validationMessage
 */
const Select = props => {
    const selectClasses = classnames({
        "input--error": props.validationError,
        "input--success": props.validationSuccess,
    });

    const elementUniqueId = uniqueId(props.name);

    return (
        <S.MainWrapper>
            <S.InputLabel htmlFor={elementUniqueId}>{props.label}</S.InputLabel>
            <S.SelectComponent
                {...props}
                id={elementUniqueId}
                aria-label={props.label}
                aria-required={props.required}
                name={props.name}
                placeholder={props.placeholder}
                className={selectClasses}
            >
                {props.children}
            </S.SelectComponent>
            <S.InputValidationContainer>
                {props.validationMessage ? (
                    <React.Fragment>
                        <MdInfo />
                        <S.InputValidationMessage>{props.validationMessage}</S.InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </S.InputValidationContainer>
        </S.MainWrapper>
    );
};

Select.propTypes = {
    /** Os elementos de opção para preencher o `select`. Devem ser `<option>`. */
    children: Proptypes.node.isRequired,

    /** Atributo de nome do elemento `<select>`. Por padrão, o nome também será repassado para o atributo `for` do elemento `<label>`. */
    name: Proptypes.string.isRequired,

    /** String que deve ser repassada para o elemento `<label>`. */
    label: Proptypes.string.isRequired,

    /** A dica curta exibida na entrada antes que o usuário insira um valor. */
    placeholder: Proptypes.string,

    /** Caso seja `true`, o input indicará um erro, e a mensagem definida em `validationMessage` será exibida abaixo do input. Essa informação é geralmente obtida através do controlador de formulário.*/
    validationError: Proptypes.bool,

    /** Caso seja `true` o input indicará sucesso. */
    validationSuccess: Proptypes.bool,

    /** Caso seja especificado, será mostrado abaixo do input sempre que a propriedade `validationError` for `true`*/
    validationMessage: Proptypes.string,
};

export default Select;
