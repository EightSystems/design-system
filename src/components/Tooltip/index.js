import React, { useState } from "react";
import styled from "styled-components";
import { Popover } from "@headlessui/react";
import Proptypes from "prop-types";
import { usePopper } from "react-popper";

const PopoverWrapper = styled(Popover.Panel)`
    background-color: var(--secondary);
    padding: 4px 6px;
    border-radius: 3px;
    box-shadow: var(--boxShadow-default);
`;

const Tooltip = props => {
    const placement = props.placement;
    const offset = props.offset;

    const [referenceElement, setReferenceElement] = useState();
    const [popperElement, setPopperElement] = useState();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: offset,
                },
            },
        ],
    });

    return (
        <Popover>
            {({ open }) => (
                <React.Fragment>
                    <Popover.Button style={{ width: "fit-content" }} ref={setReferenceElement} as="div">
                        {props.children}
                    </Popover.Button>

                    {open && (
                        <PopoverWrapper
                            className={props.className}
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                            static
                        >
                            {typeof props.tooltipContent === "string" ? (
                                <span tabIndex={0}>{props.tooltipContent}</span>
                            ) : (
                                props.tooltipContent
                            )}
                        </PopoverWrapper>
                    )}
                </React.Fragment>
            )}
        </Popover>
    );
};

const isValidReactElement = (props, propName, componentName) => {
    if (!React.isValidElement(props[propName])) {
        return new Error(
            `@8sistemas/design-system: Invalid prop ${propName} passed to ${componentName}. Expected the prop ${propName} to be a React element. Consider writing a functional component that returns a valid React element.` +
                "See: https://reactjs.org/docs/rendering-elements.html"
        );
    }

    return null;
};

Tooltip.propTypes = {
    /** Sobrepõe ou extende as classes de estilo existentes. */
    className: Proptypes.string,

    /** Determina ao redor de qual elemento o Tooltip deve ser renderizado */
    children: Proptypes.node.isRequired,

    /** Determina o conteúdo interno do Tooltip. Deve ser um elemento React válido */
    tooltipContent: Proptypes.oneOfType([isValidReactElement, Proptypes.string]).isRequired,

    /** Define o a distância entre o Tooltip e o componente ao qual ele está atracado */
    offset: Proptypes.array.isRequired,

    /** Determina o posicionamento do Tooltip em relação ao componente ao qual ele está atracado */
    placement: Proptypes.oneOf([
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
};

export default Tooltip;
