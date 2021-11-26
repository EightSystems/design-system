import * as React from "react";
import { Animated } from "react-native";
import * as S from "./styled.native";
import { NativeSkeletonProps } from "./types";

const Skeleton = React.forwardRef<any, NativeSkeletonProps>(
    ({ borderRadius = 4, isCircular = false, size = 20, animationSpeed = 0.8, ...props }, componentRef) => {
        const fadeAnim = React.useRef(new Animated.Value(0.1)).current;

        const dispatchPulseAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 0.3,
                        duration: animationSpeed * 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 0.1,
                        duration: animationSpeed * 1000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        React.useEffect(() => {
            dispatchPulseAnimation();
        }, []);

        return (
            <S.SkeletonWrapper
                borderRadius={borderRadius}
                isCircular={isCircular}
                size={size}
                animationSpeed={animationSpeed}
                ref={componentRef}
                style={{
                    opacity: fadeAnim,
                }}
                {...props}
            />
        );
    }
);

export default Skeleton;
