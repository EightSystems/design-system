import React from "react";
import styled, { css } from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import classnames from "classnames";
import { IMaskMixin } from "react-imask";
import { isValidReactElement } from "../../utils/validation/isValidReactElement";

import * as T from "../../styles/typography";
import * as V from "../../styles/variables";

import { MdInfo } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";

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
    border-radius: 4px;
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
const SpinnerOverride = css`
    margin-top: 8px;
`;

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => <InputComponent {...props} ref={inputRef} />);

class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
        };
    }

    render() {
        const inputClasses = classnames({
            "input--focused": this.state.isFocused === true,
            "input--error": this.props.validationError,
            "input--success": this.props.validationSuccess,
        });

        const elementUniqueId = uniqueId(this.props.name);
        return (
            <MainWrapper className={this.props.controlClass}>
                <InputLabel htmlFor={elementUniqueId}>{this.props.label}</InputLabel>
                <InputWrapper className={inputClasses}>
                    {this.props.children ? (
                        this.props.children
                    ) : (
                        <MaskedStyledInput
                            {...this.props}
                            id={elementUniqueId}
                            aria-label={this.props.label}
                            aria-required={this.props.required}
                            name={this.props.name}
                            placeholder={this.props.placeholder}
                            type={this.props.type}
                            autoComplete={this.props.autoComplete}
                            autoFocus={this.props.autoFocus}
                            disabled={this.props.disabled}
                            onFocus={e => {
                                this.setState(
                                    {
                                        isFocused: true,
                                    },
                                    () => {
                                        if (this.props.onFocus) {
                                            this.props.onFocus(e);
                                        }
                                    }
                                );
                            }}
                            onBlur={e => {
                                this.setState(
                                    {
                                        isFocused: false,
                                    },
                                    () => {
                                        if (this.props.onBlur) {
                                            this.props.onBlur(e);
                                        }
                                    }
                                );
                            }}
                            onChange={this.props.onChange}
                        />
                    )}
                    {this.props.icon && this.props.tooltipContent ? (
                        <Tooltip
                            tooltipContent={this.props.tooltipContent}
                            placement={this.props.tooltipPlacement}
                            offset={this.props.tooltipOffset}
                            className={this.props.tooltipClass}
                        >
                            <IconWrapper>{this.props.icon === "info" ? <MdInfo /> : null}</IconWrapper>
                        </Tooltip>
                    ) : null}
                    {this.props.icon === "loadingSpinner" ? (
                        <IconWrapper>
                            <ClipLoader css={SpinnerOverride} size={24} color="gray" />
                        </IconWrapper>
                    ) : null}
                </InputWrapper>
                <InputValidationContainer>
                    {this.props.validationMessage ? (
                        <React.Fragment>
                            <MdInfo />
                            <InputValidationMessage>{this.props.validationMessage}</InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </InputValidationContainer>
            </MainWrapper>
        );
    }
}

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
    icon: Proptypes.oneOf(["info", "loadingSpinner"]),

    /** Determina o conteúdo interno do Tooltip. Deve ser um elemento React válido */
    tooltipContent: Proptypes.oneOfType([isValidReactElement, Proptypes.string]).isRequired,

    /** Define o a distância entre o Tooltip e o componente ao qual ele está atracado */
    tooltipOffset: Proptypes.array.isRequired,

    /** Determina o posicionamento do Tooltip em relação ao componente ao qual ele está atracado */
    tooltipPlacement: Proptypes.oneOf([
        "auto",
        "auto-start",
        "auto-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
    ]).isRequired,

    /** Sobrepõe ou extende as classes de estilo do componente Tooltip. */
    tooltipClass: Proptypes.string,

    /** Injeta classes personalizadas no container ao redor de todo o controlador (label + input). */
    controlClass: Proptypes.string,

    /** (Opcional) Em alguns raros casos será necessário usar o componente provido por um pacote de validação (como o cpf-cnpj-mask). Nesse caso, passe o componente fornecido como um children de TextField, e o input será renderizado no lugar do input nativo. */
    children: Proptypes.node,
};

TextField.defaultProps = {
    value: "",
};

export default TextField;
