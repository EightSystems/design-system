import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import styled from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";
import { useContainerDimensions } from "../../hooks/useContainerDimensions";

import { MdError, MdCheckCircle, MdClose } from "react-icons/md";

import * as V from "../../styles/variables";

const DialogWrapper = styled.div`
    position: fixed;
    z-index: 10;
    visibility: ${props => props.showToast ? "visible" : "hidden"};

    .top-left {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        top: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-left__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    .top-right {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        top: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-right__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .top-center {
        transform: ${props => (props.width ? `translate(0px, -${props.height + 20}px)` : `translate(400px , 0px)`)};
        top: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .top-center__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    .bottom-left {
        transform: ${props => (props.width ? `translate(-${props.width + 20}px, 0px)` : `translate(-400px , 0px)`)};
        bottom: 12px;
        left: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-left__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .bottom-right {
        transform: ${props => (props.width ? `translate(${props.width + 20}px, 0px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        right: 12px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-right__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    .bottom-center {
        transform: ${props => (props.width ? `translate(0px, ${props.height + 20}px)` : `translate(400px , 0px)`)};
        bottom: 12px;
        left: ${props => `calc(50% - calc(${props.width}px / 2))`};
        opacity: 0;
        transition: 0.3s ease-in-out;
    }
    .bottom-center__mounted {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;
const ToastWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: flex-start;
    box-shadow: ${V.BoxShadow.default};
    border-radius: 3px;
    padding: var(--space-sm) var(--space-default);
    &[data-status="info"] {
        background: var(--secondary);
    }
    &[data-status="warning"] {
        background: var(--danger);
    }
    &[data-status="success"] {
        background: var(--successShade);
    }
    .close-icon {
        color: var(--secondaryContrast);
        width: 16px;
        height: 16px;
    }
    button {
        cursor: pointer;
    }
`;
const TextWrapper = styled.div`
    font-family: ${V.FontFaces.Inter};
    margin-right: var(--space-md);
`;
const ToastTitle = styled.h2`
    color: var(--secondaryContrast);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
`;
const ToastDescription = styled.p`
    color: var(--secondaryContrast);
    font-size: 14px;
    font-weight: 400;
`;
const ContextIconWrapper = styled.div`
    svg {
        color: var(--secondaryContrast);
        margin-right: var(--space-sm);
        width: 36px;
        height: 36px;
    }
`;

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

        getToastVisibility(props.showToast)
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
        <DialogWrapper
            ref={componentRef}
            id={elementUniqueId}

            /* Computed width and height values that will be used by styled-components to determinate animations */
            width={width}
            height={height}

            showToast={props.showToast}
        >
            <ToastWrapper ref={toastWrapperRef} className={positionClasses} data-status={props.status}>
                <ContextIconWrapper>
                    {props.status === "info" || props.status === "success" ? <MdCheckCircle /> : <MdError />}
                </ContextIconWrapper>

                <TextWrapper>
                    <ToastTitle>{props.title}</ToastTitle>
                    <ToastDescription>{props.description}</ToastDescription>
                </TextWrapper>

                {/* test  */}

                <button ref={closeButtonRef} onClick={props.onClose}>
                    <MdClose className="close-icon" />
                </button>
            </ToastWrapper>
        </DialogWrapper>
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
