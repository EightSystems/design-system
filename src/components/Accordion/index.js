import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

const AccordionContainer = styled.div`
    display: block;
`;

const Accordion = React.forwardRef(({ children, ...props }, componentRef) => {
    const [currentIndexOpen, setCurrentIndexOpen] = useState(props.initialIndex || 0);

    const setCurrentIndex = currentIndex => setCurrentIndexOpen(currentIndex === currentIndexOpen ? -1 : currentIndex);

    return (
        <AccordionContainer {...props} className={props.className} ref={componentRef}>
            {children &&
                children({
                    isOpen: index => index === currentIndexOpen,
                    onClick: index => setCurrentIndex(index),
                })}
        </AccordionContainer>
    );
});

Accordion.propTypes = {
    /** Uma função que deve retornar um ou mais componentes `<AccordionItem>` */
    children: Proptypes.func.isRequired,

    /** Identificador do item que estará aberto durante a primeira montagem do componente  */
    initalIndex: Proptypes.any,
};

export default Accordion;
