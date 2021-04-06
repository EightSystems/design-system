import { css } from "styled-components";
import * as V from "./variables";
import { fontFaces } from "./typography";

export const GlobalStyles = css`
  ${fontFaces};

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
`;
