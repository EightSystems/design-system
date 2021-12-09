import isFunction from "lodash/isFunction";
import React from "react";
import { Spacer } from "../../layout/Spacer";
import { Divider } from "../../primitives/Divider";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import { CollapseComponent } from "./CollapseComponent";
import * as S from "./styled";
import { AccordionItemProps } from "./types";

export const AccordionItem = (props: AccordionItemProps) => {
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
            <S.AccordionTitleContainer onMouseDown={onClickHandler} onFocus={onClickHandler} onPress={onClickHandler}>
                {isOpen ? (
                    <Icon familyName="FontAwesome" icon="fa-chevron-down" size="md" color="secondary" />
                ) : (
                    <Icon familyName="FontAwesome" icon="fa-chevron-right" size="md" color="secondary" />
                )}

                <Spacer size={5} axis="horizontal" />

                <Text fontFace="primary" fontSize="md" fontWeight="bold">
                    {props.label}
                </Text>
            </S.AccordionTitleContainer>
            <CollapseComponent isOpened={isOpen}>{props.children}</CollapseComponent>
            <Divider backgroundColor="light" />
        </S.AccordionWrapper>
    );
};

export default AccordionItem;
