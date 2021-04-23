import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import classnames from "classnames";
import { IMaskMixin } from "react-imask";

import * as T from "../../styles/typography";
import * as V from "../../styles/variables";
import { MdInfo } from "react-icons/md";
import Tooltip from "../Tooltip";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .input--focused {
        border: ${V.Border.hover};
        box-shadow: ${V.BoxShadow.default};
    }
    .input--error {
        border: ${V.Border.danger};
    }
    .input--success {
        border: ${V.Border.success};
    }
`;
const InputLabel = styled.label`
    ${T.FormLabel};
    padding-bottom: ${V.Space.xs};
`;
const InputWrapper = styled.div`
    display: flex;
    border: ${V.Border.default};
    border-radius: 4px;
    background: #fcfcfc;
    transition: 150ms ease-in-out;
`;
const InputComponent = styled.input`
    ${T.FormInput};
    padding: 12px 12px;
    width: 100%;
    border: none;
    border-color: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        ${T.PlaceholderFormInput};
    }
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    height: 100%;

    color: var(--text-body);
    svg {
        cursor: pointer;
        width: 28px;
        height: 28px;
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
    height: ${V.Space.md};
`;

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => <InputComponent {...props} ref={inputRef} />);

const TextField = props => {
    const [isFocused, setIsFocused] = useState(false);

    const inputClasses = classnames({
        "input--focused": isFocused === true,
        "input--error": props.validationError,
        "input--success": props.validationSuccess,
    });

    const elementUniqueId = uniqueId(props.name);
    return (
        <MainWrapper>
            <InputLabel htmlFor={elementUniqueId}>{props.label}</InputLabel>
            <InputWrapper className={inputClasses}>
                <MaskedStyledInput
                    {...props}
                    id={elementUniqueId}
                    aria-label={props.label}
                    aria-required={props.required}
                    name={props.name}
                    placeholder={props.placeholder}
                    type={props.type}
                    autoComplete={props.autoComplete}
                    autoFocus={props.autoFocus}
                    disabled={props.disabled}
                    value={props.value}
                    onFocus={e => {
                        setIsFocused(true);
                        if (props.onFocus) {
                            props.onFocus(e);
                        }
                    }}
                    onBlur={e => {
                        setIsFocused(false);
                        if (props.onBlur) {
                            props.onBlur(e);
                        }
                    }}
                    onChange={props.onChange}
                />
                {props.icon ? (
                    <Tooltip content={props.iconTooltipMessage} position={props.iconTooltipDirection}>
                        <IconWrapper>{props.icon === "info" ? <MdInfo /> : null}</IconWrapper>
                    </Tooltip>
                ) : null}
            </InputWrapper>
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

TextField.propTypes = {
    /** Atributo de nome do elemento `<input>`. Por padrão, o nome também será repassado para o atributo `for` do elemento `<label>`. */
    name: Proptypes.string.isRequired,

    /** String que deve ser repassada para o elemento `<label>`. */
    label: Proptypes.string.isRequired,

    /** Tipo do elemento `<input>`. Deve ser um atributo `type` valido para o elemento `<input>` do HTML5, e aplicável para inputs de texto. */
    type: Proptypes.oneOf(["password", "email", "text", "tel", "number", "search", "url"]),

    /** A dica curta exibida na entrada antes que o usuário insira um valor. */
    placeholder: Proptypes.string,

    /** Fornece capacidades de auto-complete ao user agent baseado na [especificação](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute). */
    autoComplete: Proptypes.string,

    /** Caso seja `true`, o elemento `<input>` desse controlador estará focado durante a primeira montagem.*/
    autoFocus: Proptypes.bool,

    /** Caso seja `true`, o input estará desabilitado. */
    disabled: Proptypes.bool,

    /** O valor do elemento `<input>`, requerido para [componentes controlados](https://pt-br.reactjs.org/docs/forms.html#controlled-components). */
    value: Proptypes.any,

    /** Controlador de [evento sintético](https://pt-br.reactjs.org/docs/events.html#focus-events) onFocus presente no React. */
    onFocus: Proptypes.func,

    /** Controlador de [evento sintético](https://pt-br.reactjs.org/docs/events.html#focus-events) onBlur  presente no React. */
    onBlur: Proptypes.func,

    /** Controlador de evento de formulário com componente controlado onChange presente no React. */
    onChange: Proptypes.func,

    /** Caso seja `true`, o input indicará um erro, e a mensagem definida em `validationMessage` será exibida abaixo do input. Essa informação é geralmente obtida através do controlador de formulário.*/
    validationError: Proptypes.bool,

    /** Caso seja `true` o input indicará sucesso. */
    validationSuccess: Proptypes.bool,

    /** Caso seja especificado, será mostrado abaixo do input sempre que a propriedade `validationError` for `true`*/
    validationMessage: Proptypes.string,

    /** Caso seja especificado, definirá que tipo de ícone deverá ser exibido dentro do componente. */
    icon: Proptypes.oneOf(["info"]),

    /** Caso seja especificado, definirá qual mensagem deve aparecer dentro do tooltip ao clicar no ícone. */
    iconTooltipMessage: Proptypes.string,

    /** Caso seja especificado, definirá em qual direção deve ficar o tooltip ao clicar no ícone. */
    iconTooltipDirection: Proptypes.oneOf(["top", "left", "right", "bottom"]),
};

TextField.defaultProps = {
    value: "",
};

export default TextField;