import React, { useState } from "react";
import Proptypes from "prop-types";

/**
 * @type {React.FC<Props>}
 *
 * @typedef {Object} Props
 * @property {any} initialIndex
 */
const Accordion = React.forwardRef(({ children, ...props }, componentRef) => {
    const [currentIndexOpen, setCurrentIndexOpen] = useState(props.initialIndex || 0);

    const setCurrentIndex = currentIndex => setCurrentIndexOpen(currentIndex === currentIndexOpen ? -1 : currentIndex);

    return (
        <div {...props} className={props.className} ref={componentRef} style={{ display: "block " }}>
            {children &&
                children({
                    isOpen: index => index === currentIndexOpen,
                    onClick: index => setCurrentIndex(index),
                })}
        </div>
    );
});

Accordion.propTypes = {
    /** A function that must return one or more `<AccordionItem>` components. */
    children: Proptypes.func.isRequired,

    /** Index of the item that must be open when the component mounts for the first time. */
    initialIndex: Proptypes.any,
};

export default Accordion;
