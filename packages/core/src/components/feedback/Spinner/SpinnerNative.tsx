import * as React from "react";
import { ActivityIndicator } from "react-native";
import { SpinnerNativeProps } from "./types";

const Spinner = React.forwardRef<any, SpinnerNativeProps>(({ color, size = "small", ...props }, componentRef) => {
    return <ActivityIndicator ref={componentRef} color={color} size={size} {...props} />;
});

export default React.memo(Spinner);
