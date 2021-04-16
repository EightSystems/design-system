import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

// @WIP: This component is not yet finished, does not have a well-defined API,
// and it's not ready for production use.

const AccordionContainer = styled.div``;

const Accordion = React.forwardRef(({ children, ...props }, componentRef) => (
    <Accordion {...props} className={props.className} ref={componentRef}>
        {children &&
            children.map((step, index) => {
                return React.cloneElement(step, {
                    ...step.props,
                    index,
                    active: props.activeStep === index,
                });
            })}
    </Accordion>
));

Accordion.propTypes = {
    /** Um ou mais componentes `<AccordionItem>` */
    children: Proptypes.node.isRequired,
};

export default Accordion;
