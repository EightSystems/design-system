import { useEffect, useState } from "react";
import { ColorSchemeName } from "./types";

const getQuery = () => {
    return window.matchMedia != null ? window.matchMedia("(prefers-color-scheme: dark)") : null;
};

const query = getQuery();
const getColorScheme = (): ColorSchemeName => {
    return query && query.matches ? "dark" : "light";
};

export const useColorScheme = (): ColorSchemeName => {
    const [colorScheme, setColorScheme] = useState(getColorScheme());

    const mappedListener = (ev: MediaQueryListEvent) => {
        if (ev.matches) {
            setColorScheme("dark");
        } else {
            setColorScheme("light");
        }
    };

    useEffect(() => {
        if (query) {
            query.addEventListener("change", mappedListener);

            return query.removeEventListener("change", mappedListener);
        }
    }, []);

    return colorScheme;
};
