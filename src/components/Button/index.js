import React from "react";
import Proptypes from "prop-types";
import * as S from "./styled";

const Button = React.forwardRef((props, componentRef) => {
    return (
        <S.ButtonWrapper
            {...props}
            className={props.className}
            data-color={props.color}
            data-outline={props.hasOutline}
            type={props.type}
            disabled={props.disabled}
            ref={componentRef}
        >
            {props.children}
        </S.ButtonWrapper>
    );
});

Button.propTypes = {
    /** O conteúdo do botão. */
    children: Proptypes.node.isRequired,

    /** Sobrepõe ou extende as classes de estilo existentes. */
    className: Proptypes.string,

    /** Define a cor contextual do botão. */
    color: Proptypes.oneOf(["primary", "secondary", "danger"]),

    /** Caso seja `true`, o botão terá um estilo com background vazado e bordas com a cor definida em `color`. */
    hasOutline: Proptypes.bool,

    /** O componente que é usado no nó raiz. Pode ser util quando é usado em conjunto com outros botões em formulários controlados e é necessário evitar o comportamento de submit em determinados botões. */
    type: Proptypes.string,
};

Button.defaultProps = {
    color: "primary",
    hasOutline: false,
};

export default Button;
