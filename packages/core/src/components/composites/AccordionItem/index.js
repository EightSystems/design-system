import isFunction from "lodash/isFunction";
import Proptypes from "prop-types";
import React from "react";
import { UnmountClosed } from "react-collapse";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import * as S from "./styled";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {string} label
 * @property {{bool \ function}} isOpen
 */
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
                <S.AccordionItemIconWrapper>
                    {isOpen ? <BiChevronDown /> : <BiChevronRight />}
                </S.AccordionItemIconWrapper>
                <S.AccordionItemLabel>{props.label}</S.AccordionItemLabel>
            </S.AccordionItemContainer>
            <UnmountClosed isOpened={isOpen}>{props.children}</UnmountClosed>
            <S.AccordionItemUnderline />
        </S.AccordionWrapper>
    );
};

AccordionItem.propTypes = {
    /** Components that must be inside the`<AccordionItem>`. */
    children: Proptypes.node.isRequired,

    /** Title that will be shown on this Accordion item. */
    label: Proptypes.string.isRequired,

    /** Defines if the `<AccordionItem>` is open or not. It's controlled by the index on the parent `<Accordion>` component. */
    isOpen: Proptypes.oneOfType([Proptypes.bool, Proptypes.func]),
};

export default AccordionItem;
