import React from "react";
import {
    Modal as RNModal,
    ModalProps as RNModalProps,
    StyleProp,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from "react-native";
import { nativeTheme } from "../../../theme";

export type ModalProps = RNModalProps & {
    children: React.ReactNode;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    halfScreen?: boolean;
    isOpen: boolean;
};
const Modal = ({
    children,
    backdropStyle,
    overlayStyle,
    onBackdropPress = () => null,
    fullScreen = false,
    halfScreen = false,
    isOpen,
}: ModalProps) => {
    return (
        <RNModal visible={isOpen} onRequestClose={onBackdropPress} animationType="fade" transparent>
            <TouchableWithoutFeedback onPress={onBackdropPress}>
                <View style={StyleSheet.flatten([styles.backdrop, backdropStyle])} />
            </TouchableWithoutFeedback>

            <View style={styles.container} pointerEvents="box-none">
                <View
                    style={StyleSheet.flatten([
                        styles.overlay,
                        fullScreen && styles.fullscreen,
                        halfScreen && styles.halfScreen,
                        overlayStyle,
                    ])}
                >
                    {children}
                </View>
            </View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(34, 36, 40, 0.4)",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: 14,
        paddingRight: 14,
    },
    fullscreen: {
        width: "100%",
        height: "90%",
    },
    halfScreen: {
        width: "100%",
        minHeight: "50%",
    },
    overlay: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        shadowColor: nativeTheme.nativeShadows.lg.shadowColor,
        shadowOffset: {
            width: nativeTheme.nativeShadows.lg.shadowOffset.width,
            height: nativeTheme.nativeShadows.lg.shadowOffset.height,
        },
        shadowRadius: nativeTheme.nativeShadows.lg.shadowRadius,
        elevation: nativeTheme.nativeShadows.lg.elevation,
    },
});

export { Modal };