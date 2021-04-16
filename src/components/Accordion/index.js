import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";

// @WIP: This component is not yet finished, does not have a well-defined API,
// and it's not ready for production use.

const AccordionContainer = styled.div`
    display: block;
`;

const Accordion = React.forwardRef(({ children, ...props }, componentRef) => {
    const [currentIndexOpen, setCurrentIndexOpen] = useState(props.initialIndex || 0);

    const setCurrentIndex = (currentIndex) =>
        setCurrentIndexOpen(currentIndex === currentIndexOpen ? -1 : currentIndex);

    return (
        <AccordionContainer {...props} className={props.className} ref={componentRef}>
            {children && children({
                isOpen: (index) => index === currentIndexOpen,
                onClick: (index) => setCurrentIndex(index)
            })}
        </AccordionContainer>
    );
});

Accordion.propTypes = {
    /** Um ou mais componentes `<AccordionItem>` */
    children: Proptypes.func.isRequired,

    /** Index do item que está aberto no momento  */
    initalIndex: Proptypes.any,
};

export default Accordion;
