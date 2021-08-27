import React from "react";
import { uniqueId } from "lodash";
import classnames from "classnames";
import { IMaskMixin } from "react-imask";

import { WebTextFieldProps } from "./types";

import { MdInfo, MdCheck, MdError } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";

import Tooltip from "../../feedback/Tooltip";

import * as S from "./styled";

const MaskedStyledInput = IMaskMixin(({ inputRef, ...props }) => <S.InputComponent {...props} ref={inputRef} />);

type TextFieldState = { isFocused: boolean };

class TextField extends React.Component<WebTextFieldProps, TextFieldState> {
    static defaultProps = {
        value: "",
    };

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
                            <S.IconWrapper>
                                <React.Fragment>
                                    {this.props.icon === "info" ? <MdInfo /> : null}
                                    {this.props.icon === "error" ? <MdError /> : null}
                                    {this.props.icon === "success" ? <MdCheck /> : null}
                                </React.Fragment>
                            </S.IconWrapper>
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

export default React.memo(TextField);
