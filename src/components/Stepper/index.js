import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

// @WIP: This component is not yet finished, does not have a well-defined API, and it's not ready for production use.

const StepperContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Stepper = React.forwardRef((props, componentRef) => {
    
    console.log(props)

    const childrenArray = React.Children.toArray(props.children);
    const steps = childrenArray.map((step, index) => {
        const state = {
            index,
            active: false,
        };

        if (props.activeStep === index) {
            state.active = true;
        }

        return React.cloneElement(step, {
            ...state,
            ...step.props,
        });
    });

    console.log(steps)

    return (
        <StepperContainer {...props} className={props.className} ref={componentRef}>
            {steps}
        </StepperContainer>
    );
});

Stepper.propTypes = {
    /** Dois ou mais componentes `<Step>` */
    children: Proptypes.node,

   /** Define o passo ativo (baseado no index zero). */
   activeStep: Proptypes.number,
}

export default Stepper;
