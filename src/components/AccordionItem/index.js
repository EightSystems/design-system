import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import { isFunction } from "lodash";
import { UnmountClosed } from "react-collapse";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as V from "../../styles/variables";

import Button from "../Button";

const AccordionWrapper = styled.div`
    margin-top: ${V.Space.xs};
    .ReactCollapse--collapse {
        transition: height 300ms ease-in-out;
        padding-top: var(--space-xs);
    }
`;
const AccordionItemUnderline = styled.div`
    width: 100%;
    border-top: ${V.Border.light};
    margin-top: ${V.Space.xs};
`;
const AccordionItemIconWrapper = styled.div`
    display: flex;
    align-items: center;
    img,
    svg {
        width: ${V.Space.md};
        height: ${V.Space.md};
    }
`;
const AccordionItemContainerButton = styled(Button)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space-xs);
`;

const AccordionItem = props => {
    const { onClick, onMouseDown, onFocus, ...propsWithoutEventHandlers } = props;

    const isOpen = props.isOpen
        ? isFunction(props.isOpen)
            ? props.isOpen(props.id || props.label)
            : props.isOpen
        : false;

    const onClickHandler = props.onClick
        ? event => {
              event.preventDefault();
              event.stopPropagation();

              props.onClick(props.id || props.label);
          }
        : null;

    return (
        <AccordionWrapper {...propsWithoutEventHandlers}>
            {isOpen ? (
                <AccordionItemContainerButton hasOutline="true" onMouseDown={onClickHandler} onFocus={onClickHandler}>
                    <AccordionItemIconWrapper data-open={isOpen}>
                        <BiChevronDown />
                    </AccordionItemIconWrapper>
                    {props.label}
                </AccordionItemContainerButton>
            ) : (
                <AccordionItemContainerButton hasOutline="true" onMouseDown={onClickHandler} onFocus={onClickHandler}>
                    <AccordionItemIconWrapper data-open={isOpen}>
                        <BiChevronRight />
                    </AccordionItemIconWrapper>
                    {props.label}
                </AccordionItemContainerButton>
            )}
            <UnmountClosed isOpened={isOpen}>{props.children}</UnmountClosed>
            <AccordionItemUnderline />
        </AccordionWrapper>
    );
};

AccordionItem.propTypes = {
    /** Componentes que devem estar dentro do `<AccordionItem>`. */
    children: Proptypes.node.isRequired,

    /** Título que deve ser exibido nesse item do Accordion. */
    label: Proptypes.string.isRequired,

    /** Define se o `<AccordionItem>` está aberto ou não. É controlado através do index repassado pelo componente parente `<Accordion>`. */
    isOpen: Proptypes.oneOfType([Proptypes.bool, Proptypes.func]),
};

export default AccordionItem;
