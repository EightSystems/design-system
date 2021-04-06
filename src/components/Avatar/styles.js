import styled from "styled-components";
import { GlobalStyles } from "../../styles/theme";
import * as V from "../../styles/variables";

export const AvatarWrapper = styled.div`
    ${GlobalStyles}

    .avatar__wrapper {
      font-family: ${V.FontFaces.Poppins};
      font-weight: 700;
      line-height: 1;
      user-select: none;

      position: relative;
      overflow: hidden;
      background: var(--grayShade);
      color: var(--background);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    & .avatar__wrapper--large {
        width: 156px;
        height: 156px;
        font-size: 48px;
    }

    & .avatar__wrapper--medium {
        width: 100px;
        height: 100px;
        font-size: 36px;
    }

    & .avatar__wrapper--small {
        width: 56px;
        height: 56px;
        font-size: 24px;
    }

    .avatar__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
