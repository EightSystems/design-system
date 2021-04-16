import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { uniqueId } from "lodash";

const StepperContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Stepper = React.forwardRef(({ children, ...props }, componentRef) => (
    <StepperContainer {...props} className={props.className} ref={componentRef}>
        {children &&
            children.map((step, index) => {
                return React.cloneElement(step, {
                    ...step.props,
                    key: uniqueId("id-accordion"),
                    index,
                    active: props.activeStep === index,
                });
            })}
    </StepperContainer>
));

Stepper.propTypes = {
    /** Dois ou mais componentes `<Step>` */
    children: Proptypes.node.isRequired,

    /** Define o passo ativo (baseado no index zero). */
    activeStep: Proptypes.number,
};

export default Stepper;
