import * as React from "react";

export const useDetectOutsideClick = (el: any, initialState: boolean) => {
    const [isActive, setIsActive] = React.useState(initialState);
    React.useEffect(() => {
        const onClick = e => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener("click", onClick);
        }
        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isActive, el]);
    return [isActive, setIsActive];
};
