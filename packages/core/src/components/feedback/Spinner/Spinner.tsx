import * as React from "react";
import { ThemeContext } from "styled-components";
import { theme } from "../../../theme";
import * as S from "./styled";
import { SpinnerProps } from "./types";

const Spinner = ({ color = "primary", size = "lg" }: SpinnerProps) => {
    const themeContext = React.useContext<typeof theme>(ThemeContext);
    const spinnerRealColor =
        typeof themeContext.colors[color] != "undefined" ? (themeContext.colors[color] as string) : "gray";

    const spinnerRealSize =
        typeof themeContext.typography.fontSizes[size] != "undefined"
            ? +themeContext.typography.fontSizes[size].replace(/[^0-9]+/g, "")
            : 32;

    return (
        <S.SpinnerContainer size={spinnerRealSize}>
            <S.SpinnerBody size={spinnerRealSize} color={spinnerRealColor} />
        </S.SpinnerContainer>
    );
};

export default Spinner;
