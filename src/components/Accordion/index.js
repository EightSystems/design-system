import React, { useState } from "react";
import Proptypes from "prop-types";

const Accordion = React.forwardRef(({ children, ...props }, componentRef) => {
    const [currentIndexOpen, setCurrentIndexOpen] = useState(props.initialIndex || 0);

    const setCurrentIndex = currentIndex => setCurrentIndexOpen(currentIndex === currentIndexOpen ? -1 : currentIndex);

    return (
        <div
            {...props} 
            className={props.className} 
            ref={componentRef}
            style={{ display: "block "}}
        >
            {children &&
                children({
                    isOpen: index => index === currentIndexOpen,
                    onClick: index => setCurrentIndex(index),
                })}
        </div>
    );
});

Accordion.propTypes = {
    /** Uma função que deve retornar um ou mais componentes `<AccordionItem>` */
    children: Proptypes.func.isRequired,

    /** Identificador do item que estará aberto durante a primeira montagem do componente  */
    initalIndex: Proptypes.any,
};

export default Accordion;
