import React from "react";
import { Modal as RNModal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { nativeTheme } from "../../../theme";
import { ModalProps } from "./types";

const Modal = ({
    children,
    backdropStyle,
    overlayStyle,
    onClose = () => null,
    fullScreen = false,
    halfScreen = false,
    open,
}: ModalProps) => {
    return (
        <RNModal
            visible={open}
            onRequestClose={onClose}
            animationType="fade"
            transparent
            supportedOrientations={["landscape", "landscape-left", "landscape-right", "portrait"]}
        >
            <TouchableWithoutFeedback onPress={onClose}>
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
        height: "50%",
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
