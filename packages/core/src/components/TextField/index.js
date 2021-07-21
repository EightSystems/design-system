import React from "react";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import classnames from "classnames";
import { IMaskMixin } from "react-imask";
import { isValidReactElement } from "../../utils/validation/isValidReactElement";

import { MdInfo, MdCheck, MdError } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";

import Tooltip from "../Tooltip";

import * as S from "./styled";

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => <S.InputComponent {...props} ref={inputRef} />);

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
            <S.MainWrapper className={this.props.controlClass}>
                <S.InputLabel htmlFor={elementUniqueId}>{this.props.label}</S.InputLabel>
                <S.InputWrapper className={inputClasses}>
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
                            <S.IconWrapper>{this.props.icon === "info" ? <MdInfo /> : null}</S.IconWrapper>
                        </Tooltip>
                    ) : null}
                    {this.props.icon === "loadingSpinner" ? (
                        <S.IconWrapper>
                            <ClipLoader css={S.SpinnerOverride} size={24} color="gray" />
                        </S.IconWrapper>
                    ) : null}
                </S.InputWrapper>
                <S.InputValidationContainer>
                    {this.props.validationMessage ? (
                        <React.Fragment>
                            <MdInfo />
                            <S.InputValidationMessage>{this.props.validationMessage}</S.InputValidationMessage>
                        </React.Fragment>
                    ) : null}
                </S.InputValidationContainer>
            </S.MainWrapper>
        );
    }
}

TextField.propTypes = {
    /** Attribute `name` from the `<input>` element. By default, the value of this prop will also be passed to the
     * attribute `for` of the `<label>` element. */
    name: Proptypes.string.isRequired,

    /** String that will be passed to the `<label>` element. */
    label: Proptypes.string.isRequired,

    /** Type of the `<input>` element. Must be a valid `type` element for the HTML5 `<input>` element, and applicable for text inputs.  */
    type: Proptypes.oneOf(["password", "email", "text", "tel", "number", "search", "url"]),

    /** The short tip showed inside the `<input>` element before the user inserts a value. */
    placeholder: Proptypes.string,

    /** This prop helps user fill forms faster, especially on mobile device. You can learn more about it on the 
    [especification page](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute).  */
    autoComplete: Proptypes.string,

    /** If `true`, the `<input>` element of this controller will be focused during first mount. */
    autoFocus: Proptypes.bool,

    /** If `true`, the `<input>` will be disabled. */
    disabled: Proptypes.bool,

    /** The value of the `<input>` element, required for [controlled components](https://pt-br.reactjs.org/docs/forms.html#controlled-components) */
    value: Proptypes.any,

    /** [SyntheticEvent](https://pt-br.reactjs.org/docs/events.html#focus-events) controller for `onFocus` present on React. */
    onFocus: Proptypes.func,

    /** Controlador de [evento sintético](https://pt-br.reactjs.org/docs/events.html#focus-events) onBlur  presente no React. */
    onBlur: Proptypes.func,

    /** Controlador de evento de formulário com componente controlado onChange presente no React. */
    onChange: Proptypes.func,

    /** If `true` the input will indicate an error, and the message defined on 'validationMessage' props will be shown on the input.
    This is usually populated by the form controller state. */
    validationError: Proptypes.bool,

    /** If `true` the input will indicate success. */
    validationSuccess: Proptypes.bool,

    /** If specified, text string will be shown bellow input whenever the `validationError` props is `true`. */
    validationMessage: Proptypes.string,

    /** If specified, will define what of icon will be shown inside the component. */
    icon: Proptypes.oneOf(["info", "loadingSpinner"]),

    /** If specified, determinates the content inside the Tooltip. Must be a valid React element. */
    tooltipContent: Proptypes.oneOfType([isValidReactElement, Proptypes.string]),

    /** Defines the distance between the Tooltip and the component to which it is attached. */
    tooltipOffset: Proptypes.array,

    /** Determinates where the Tooltip will be positioned in relation to the component it's attached */
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
    ]),

    /** Overrides or extends the style classes from the Tooltip component. */
    tooltipClass: Proptypes.string,

    /** Injects custom classes in the container that wraps the entire controller (label + input). */
    controlClass: Proptypes.string,

    /** (Optional) In some instances, it's necessary to use the component provided by a validation package (like cpf-cnpj-mask).
    In this case provide this component as the `<TextField>` children and it will render instead of the native input.  */
    children: Proptypes.node,
};

TextField.defaultProps = {
    value: "",
};

export default TextField;
