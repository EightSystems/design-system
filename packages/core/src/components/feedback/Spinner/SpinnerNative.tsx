import * as React from "react";
import { ActivityIndicator, Platform } from "react-native";
import { NativeSpinnerProps } from "./types";

const Spinner = React.forwardRef<any, NativeSpinnerProps>(({ color, size = 36, ...props }, componentRef) => {
    if (Platform.OS === "ios") {
        /*
         * Transform uses a multiplier, so we divide the size by 36 which is the width for the large size
         * then we also make width and height to the size requested, so the element uses the space properly
         */

        return (
            <ActivityIndicator
                ref={componentRef}
                color={color}
                size={"large"}
                style={{ transform: [{ scale: size / 36 }], width: size, height: size }}
                {...props}
            />
        );
    }

    return <ActivityIndicator ref={componentRef} color={color} size={size} {...props} />;
});

export default Spinner;
