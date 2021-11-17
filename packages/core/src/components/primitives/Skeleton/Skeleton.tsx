import * as React from "react";
import * as S from "./styled";
import { WebSkeletonProps } from "./types";

const Skeleton = React.forwardRef<HTMLDivElement, WebSkeletonProps>(
    ({ borderRadius = 4, isCircular = false, size = 20, animationSpeed = 0.8, ...props }, componentRef) => {
        return (
            <S.SkeletonWrapper
                borderRadius={borderRadius}
                isCircular={isCircular}
                size={size}
                animationSpeed={animationSpeed}
                ref={componentRef}
                {...props}
            />
        );
    }
);

export default React.memo(Skeleton);
