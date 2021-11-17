import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import { useContainerDimensions } from "../../../hooks/useContainerDimensions";

import { MdError, MdCheckCircle, MdClose } from "react-icons/md";

import * as S from "./styled";

const Toast = React.forwardRef((props, componentRef) => {
    const elementUniqueId = uniqueId(props.title);
    const closeButtonRef = useRef(null);
    const toastWrapperRef = useRef();

    /* Get width and height values from the ToastContainer to be used on the transitions between visible and non-visible states */
    const { width, height } = useContainerDimensions(toastWrapperRef);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        /* On each render, check for props.visible value, and switch the state if props.visible value changes */
        const getToastVisibility = props => {
            props ? setIsVisible(true) : setIsVisible(false);
        };

        getToastVisibility(props.showToast);
    }, [props.showToast]);

    const positionClasses = classnames({
        /* Base classes for all the unmounted positions */
        "top-left": props.position === "top-left",
        "top-center": props.position === "top-center",
        "top-right": props.position === "top-right",
        "bottom-left": props.position === "bottom-left",
        "bottom-center": props.position === "bottom-center",
        "bottom-right": props.position === "bottom-right",

        /* Classes for when the component is both mounted and positioned */
        "top-left__mounted": isVisible && props.position === "top-left",
        "top-center__mounted": isVisible && props.position === "top-center",
        "top-right__mounted": isVisible && props.position === "top-right",
        "bottom-left__mounted": isVisible && props.position === "bottom-left",
        "bottom-center__mounted": isVisible && props.position === "bottom-center",
        "bottom-right__mounted": isVisible && props.position === "bottom-right",
    });

    return (
        <S.DialogWrapper
            ref={componentRef}
            id={elementUniqueId}
            /* Computed width and height values that will be used by styled-components to determinate animations */
            width={width}
            height={height}
            showToast={props.showToast}
        >
            <S.ToastWrapper ref={toastWrapperRef} className={positionClasses} data-status={props.status}>
                <S.ContextIconWrapper>
                    {props.status === "info" || props.status === "success" ? <MdCheckCircle /> : <MdError />}
                </S.ContextIconWrapper>

                <S.TextWrapper>
                    <S.ToastTitle>{props.title}</S.ToastTitle>
                    <S.ToastDescription>{props.description}</S.ToastDescription>
                </S.TextWrapper>

                <button ref={closeButtonRef} onClick={props.onClose}>
                    <MdClose className="close-icon" />
                </button>
            </S.ToastWrapper>
        </S.DialogWrapper>
    );
});

Toast.propTypes = {
    /** Sobrepõe ou extende as classes de estilo existentes. */
    className: Proptypes.string,

    /** Define se o componente Toast está visível */
    showToast: Proptypes.bool.isRequired,

    /** A função que deve ser disparada quando o botão de fechar o toast for clicado. */
    onClose: Proptypes.any,

    /** O título do Toast. */
    title: Proptypes.string.isRequired,

    /** A descrição do Toast. */
    description: Proptypes.string,

    /** Define qual tipo de Toast deve ser mostrado. O tipo escolhido influencia na cor e ícones usados no Toast. */
    status: Proptypes.oneOf(["info", "success", "warning"]),

    /** Define a posição do Toast em relação ao restante da página. */
    position: Proptypes.oneOf(["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"])
        .isRequired,

    /** O id do Toast, usado para prevenir duplicatas. É gerado automaticamente, mas um id personalizado pode ser passado ao declarar a propriedade.  */
    id: Proptypes.string,
};

export default Toast;
