import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./typography";

import * as V from "./variables";

const GlobalStyles = createGlobalStyle`
    ${fontFaces};

    html {
        --background: ${V.Color.background};

        --primary: ${V.Color.primary};
        --primaryShade: ${V.Color.primaryShade};
        --primaryTint: ${V.Color.primaryTint};
        --primaryContrast: ${V.Color.primaryContrast};

        --secondary: ${V.Color.secondary};
        --secondaryShade: ${V.Color.secondaryShade};
        --secondaryTint: ${V.Color.secondaryTint};
        --secondaryContrast: ${V.Color.secondaryContrast};

        --tertiary: ${V.Color.tertiary};
        --tertiaryShade: ${V.Color.tertiaryShade};
        --tertiaryTint: ${V.Color.tertiaryTint};
        --tertiaryContrast: ${V.Color.tertiaryContrast};

        --gray: ${V.Color.gray};
        --grayShade: ${V.Color.grayShade};
        --grayTint: ${V.Color.grayTint};

        --danger: ${V.Color.danger};
        --dangerTint: ${V.Color.dangerTint};
        --success: ${V.Color.success};
        --pending: ${V.Color.pending};
    }
`;

export default GlobalStyles;
