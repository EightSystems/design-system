import React from "react";
import {
    View,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Modal as RNModal,
    ModalProps as RNModalProps,
    ViewStyle,
    StyleProp,
} from "react-native";

import { nativeTheme } from "../../../theme";

export type ModalProps = RNModalProps & {
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    isOpen: boolean;
};

const Modal = ({
    children,
    backdropStyle,
    overlayStyle,
    onBackdropPress = () => null,
    fullScreen = false,
    ModalComponent = RNModal,
    isOpen,
}) => (
    <ModalComponent visible={isOpen} onRequestClose={onBackdropPress}>
        <TouchableWithoutFeedback onPress={onBackdropPress}>
            <View style={StyleSheet.flatten([styles.backdrop, backdropStyle])} />
        </TouchableWithoutFeedback>

        <View style={styles.container} pointerEvents="box-none">
            <View style={StyleSheet.flatten([styles.overlay, fullScreen && styles.fullscreen, overlayStyle])}>
                {children}
            </View>
        </View>
    </ModalComponent>
);

const styles = StyleSheet.create({
    backdrop: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: nativeTheme.colors.dark,
        opacity: 0.4,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    fullscreen: {
        width: "100%",
        height: "100%",
    },
    overlay: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,

        ...Platform.select({
            android: {
                elevation: nativeTheme.nativeShadows.xxlg.elevation,
            },
            default: {
                shadowColor: nativeTheme.nativeShadows.xxlg.shadowColor,
                shadowOffset: {
                    width: nativeTheme.nativeShadows.xxlg.shadowOffset.width,
                    height: nativeTheme.nativeShadows.xxlg.shadowOffset.height,
                },
                shadowRadius: nativeTheme.nativeShadows.xxlg.shadowRadius,
            },
        }),
    },
});

export default Modal;
