import { createGlobalStyle } from "styled-components";
import { fontFaces } from "./typography";

import * as V from "./variables";

const GlobalStyles = createGlobalStyle`
    ${fontFaces};

    :root {
        --background: ${V.Color.background};
        --text-primary: ${V.Color.textPrimary};
        --text-body: ${V.Color.textBody};

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

        --white: ${V.Color.white};
    }

    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    border: 0;
    padding: 0;
  }
  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }
  svg {
    fill: currentColor;
  }
  .small,
  small {
    font-size: .8em;
  }
  html {
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }
  b, strong {
    font-weight: 600;
  }
  i, em {
    font-style: italic;
  }
  input[type="search"] {
    -webkit-appearance: textfield;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
  *::placeholder {
    color: var(--secondaryColor);
  }
  *::-webkit-input-placeholder {
    color: var(--secondaryColor);
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
      transition: none;
    }
  }
`;

export default GlobalStyles;
