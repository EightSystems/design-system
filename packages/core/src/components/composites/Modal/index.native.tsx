import React from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal as RNModal,
    ModalProps as RNModalProps,
    ViewStyle,
    StyleProp,
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
        flexDirection: "column",
    },
    fullscreen: {
        width: "100%",
        height: "100%",
    },
    halfScreen: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    overlay: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        shadowColor: nativeTheme.nativeShadows.xxlg.shadowColor,
        shadowOffset: {
            width: nativeTheme.nativeShadows.xxlg.shadowOffset.width,
            height: nativeTheme.nativeShadows.xxlg.shadowOffset.height,
        },
        shadowRadius: nativeTheme.nativeShadows.xxlg.shadowRadius,
        elevation: nativeTheme.nativeShadows.xxlg.elevation,
    },
});

export default Modal;
