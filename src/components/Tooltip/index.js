import React from "react";
import Proptypes from "prop-types";
import usePopper from "../../hooks/usePopper";
import "./Tooltip.scss";

function Tooltip({ config, component, children }) {
    const [triggerRef, popupRef, isExpanded, showHandler, hideHandler] = usePopper(config);

    const tooltipProps = {
        onMouseEnter: showHandler,
        onMouseLeave: hideHandler,
        onFocus: showHandler,
        onBlur: hideHandler,
        ref: triggerRef,
    };

    return (
        <React.Fragment>
            {component(tooltipProps)}

            <div ref={popupRef} className="tooltip__popper">
                {isExpanded && (
                    <React.Fragment>
                        <div className="tooltip__arrow data-popper-arrow" />
                        <div className="tooltip__container">
                            <div className="tooltip-content">{children}</div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
}

Tooltip.propTypes = {
    children: Proptypes.node.isRequired,
    component: Proptypes.any.isRequired,
    config: Proptypes.shape({
        modifiers: Proptypes.array,
        placement: Proptypes.string,
    }),
};

export default Tooltip;
