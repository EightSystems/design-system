import React from "react";
import Proptypes from "prop-types";

import * as S from "./styled";

const Skeleton = props => {
    return (
        <S.SkeletonWrapper
            {...props}
            borderRadius={props.borderRadius}
            isCircular={props.isCircular}
            size={props.size}
            animationSpeed={props.animationSpeed}
            className={props.className}
        />
    );
};

Skeleton.propTypes = {
    /** Defines the size of the property `border-radius` of the Skeleton component in `px`. */
    borderRadius: Proptypes.number,

    /** If `true`, the Skeleton assumes a circular format, ignoring the `borderRadius` prop. */
    isCircular: Proptypes.bool,

    /** Defines the size of the Skeleton in `px`. When `isCircular=true` also defines the width and height of the `<Skeleton>` with fixed dimensions. */
    size: Proptypes.number.isRequired,

    /** Speed in which the pulsating animation loop should be executed, in seconds. */
    animationSpeed: Proptypes.number,

    /** Overrides or extends the existing style definitions with a custom class. */
    className: Proptypes.string,
};

Skeleton.defaultProps = {
    borderRadius: 4,
    isCircular: false,
    size: 20,
    animationSpeed: 0.8,
};

export default Skeleton;
