import React from "react";
import Proptypes from "prop-types";

import { isFunction } from "lodash";
import { UnmountClosed } from "react-collapse";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import * as S from "./styled";

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
        <S.AccordionWrapper {...propsWithoutEventHandlers}>
            <S.AccordionItemContainer onMouseDown={onClickHandler} onFocus={onClickHandler}>
                <S.AccordionItemIconWrapper>{isOpen ? <BiChevronDown /> : <BiChevronRight />}</S.AccordionItemIconWrapper>
                <S.AccordionItemLabel>{props.label}</S.AccordionItemLabel>
            </S.AccordionItemContainer>
            <UnmountClosed isOpened={isOpen}>{props.children}</UnmountClosed>
            <S.AccordionItemUnderline />
        </S.AccordionWrapper>
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
