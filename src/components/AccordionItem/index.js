import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

import { isFunction } from 'lodash';
import { Collapse } from "react-collapse";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as V from "../../styles/variables";

const AccordionWrapper = styled.div`
    .ReactCollapse--collapse {
        transition: height 300ms ease-in-out;
    }
`;
const AccordionItemContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const AccordionItemLabel = styled.p`
    font-family: ${V.FontFaces.Inter};
    font-size: 20px;
    font-weight: 700;
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
    const isOpen = props.isOpen ? (
        isFunction(props.isOpen) ?
            props.isOpen(props.id || props.label) :
            props.isOpen
    ) : false;

    return (
        <AccordionWrapper>
            <AccordionItemContainer onClick={props.onClick ? () => props.onClick(props.id || props.label) : null}>
                <AccordionItemIconWrapper>
                    {isOpen ? <BiChevronDown /> : <BiChevronRight />}
                </AccordionItemIconWrapper>
                <AccordionItemLabel>{props.label}</AccordionItemLabel>
            </AccordionItemContainer>
            <Collapse isOpened={isOpen}>{props.children}</Collapse>
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
    isOpen: Proptypes.oneOfType([
        Proptypes.bool,
        Proptypes.func
    ]),
};

export default AccordionItem;
