import { React, useEffect, useState } from "react";
import { Modal as RNModal } from "react-native";

import * as S from "./styled.native";

/**
 * @type {React.FC<Props>}
 * @typedef {Object} Props
 * @property {boolean} isOpen
 * @property {any} onClose
 * @property {string | number} size
 * @property {any} initialFocusRef
 * @property {any} finalFocusRef
 * @property {boolean} avoidKeyboard
 * @property {boolean} closeOnOverlay
 * @property {boolean} keyboardDismiss
 * @property {any} headerIcon
 *
 * @property {any} style
 *
 * @todo Implement disabled button status.
 * @todo Implement support for `startIcon` and `endIcon` props.
 */

const Modal = React.forwardRef((props, forwardRef) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <View>
            <RNModal {...props} ref={forwardRef}>
                {props.children}
            </RNModal>
        </View>
    );
});

export default Modal;
