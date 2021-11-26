import React from "react";

export function withGradientBackground<T, P = {}>(Component: any) {
    return React.forwardRef<T, P>((props, componentRef) => {
        return <Component {...props} ref={componentRef} />;
    });
}
