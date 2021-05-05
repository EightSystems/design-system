import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import classnames from "classnames";

import { MdInfo } from "react-icons/md";
import * as T from "../../styles/typography";
import * as V from "../../styles/variables";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .input--error {
        border: ${V.Border.danger};
    }
    .input--success {
        border: ${V.Border.success};
    }

    &:after {
        content: ">";
        pointer-events: none;
        font-family: ${V.FontFaces.Poppins};
        font-size: 24px;
        font-weight: 600;
        position: relative;
        bottom: 58px;
        margin-left: calc(100% - 35px);
        color: var(--grayShade);
        transform: rotate(90deg);
    }
`;
const InputLabel = styled.label`
    ${T.FormLabel};
    padding-bottom: 4px;
`;
const SelectComponent = styled.select`
    ${T.FormInput};
    appearance: none;
    padding: 12px 12px;
    width: 100%;
    border: ${V.Border.default};
    border-radius: 4px;
    transition: 150ms ease-in-out;
    :focus {
        outline: none;
        border: ${V.Border.hover};
        box-shadow: 0px 0px 8px rgba(0, 7, 46, 0.2);
    }

    ::-ms-expand {
        display: none;
    }
`;
const InputValidationMessage = styled.span`
    padding-left: 2px;
    ${T.FormValidationMessage};
`;
const InputValidationContainer = styled.div`
    svg {
        color: var(--danger);
        height: ${V.Space.sm};
        width: ${V.Space.sm};
    }
    padding-top: 6px;
    display: flex;
    height: 26px;
`;

const Select = props => {
    const selectClasses = classnames({
        "input--error": props.validationError,
        "input--success": props.validationSuccess,
    });

    const elementUniqueId = uniqueId(props.name);

    return (
        <MainWrapper>
            <InputLabel htmlFor={elementUniqueId}>{props.label}</InputLabel>
            <SelectComponent
                {...props}
                id={elementUniqueId}
                aria-label={props.label}
                aria-required={props.required}
                name={props.name}
                placeholder={props.placeholder}
                className={selectClasses}
            >
                {props.children}
            </SelectComponent>
            <InputValidationContainer>
                {props.validationMessage ? (
                    <React.Fragment>
                        <MdInfo />
                        <InputValidationMessage>{props.validationMessage}</InputValidationMessage>
                    </React.Fragment>
                ) : null}
            </InputValidationContainer>
        </MainWrapper>
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
