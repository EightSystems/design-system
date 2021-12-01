import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef: any) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const getDimensions = () => ({
        width: myRef.current?.offsetWidth || 0,
        height: myRef.current?.offsetHeight || 0,
    });

    const handleResize = () => {
        setDimensions(getDimensions());
    };

    useEffect(() => {
        if (myRef.current) {
            setDimensions(getDimensions());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [myRef]);

    return dimensions;
};
