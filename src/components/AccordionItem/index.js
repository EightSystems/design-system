import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import { isFunction } from "lodash";
import { UnmountClosed } from "react-collapse";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as V from "../../styles/variables";

const AccordionWrapper = styled.div`
    margin-top: ${V.Space.xs};
    .ReactCollapse--collapse {
        transition: height 300ms ease-in-out;
    }
`;
const AccordionItemContainer = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    :focus {
        outline: none;
    }
`;
const AccordionItemLabel = styled.p`
    font-family: ${V.FontFaces.Inter};
    font-size: 20px;
    font-weight: 700;
    user-select: none;
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
        color: var(--secondary);
    }
`;

const AccordionItem = props => {
    const {onClick, onMouseDown, onFocus, ...propsWithoutEventHandlers} = props;

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
            <AccordionItemContainer onMouseDown={onClickHandler} onFocus={onClickHandler}>
                <AccordionItemIconWrapper>{isOpen ? <BiChevronDown /> : <BiChevronRight />}</AccordionItemIconWrapper>
                <AccordionItemLabel>{props.label}</AccordionItemLabel>
            </AccordionItemContainer>
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
