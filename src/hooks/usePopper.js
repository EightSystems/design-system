import { useCallback, useEffect, useRef, useState } from "react";
import { createPopper } from "@popperjs/core";

const usePopper = popperConfig => {
    const [toggledState, setToggledState] = useState(false);
    const [popperInstance, setPopperInstance] = useState();

    const triggerRef = useRef();
    const popupRef = useRef();

    const showHandler = useCallback(() => {
        setToggledState(true);
    }, []);

    const hideHandler = useCallback(() => {
        setToggledState(false);
    }, []);

    useEffect(() => {
        const popper = createPopper(triggerRef.current, popupRef.current, popperConfig || {});

        setPopperInstance(popper);

        return () => popper.destroy();
    }, [popperConfig]);

    useEffect(() => {
        toggledState === true && popperInstance.forceUpdate();
    }, [toggledState, popperInstance]);

    return [triggerRef, popupRef, toggledState, showHandler, hideHandler];
};

export default usePopper;
