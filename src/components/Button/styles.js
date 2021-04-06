import styled from "styled-components";
import { GlobalStyles } from '../../styles/theme'
import * as V from '../../styles/variables'

export const Wrapper = styled.div`
    ${GlobalStyles};
    .button {
        font-family: ${V.FontFaces.Poppins};
        font-size: 18px;
        appearance: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
        padding: 18px 24px;
        text-decoration: none;
        text-align: center;
        transition: 150ms ease-in-out;
    }
    & .button--primary {
        background: var(--primary);
        border: solid 2px var(--primary);
        color: var(--primaryContrast);
    }
    & .button--primary__outline {
        background: none;
        border: solid 2px var(--primary);
        color: var(--primary);
    }
    & .button--danger {
        background: var(--danger);
        border: solid 2px var(--danger);
        color: var(--primaryContrast);
    }
    & .button--danger__outline {
        background: none;
        border: solid 2px var(--danger);
        color: var(--danger);
    }
    & .button--primary:hover {
        background: var(--primaryTint);
        border: solid 2px var(--primaryTint);
        color: var(--primaryContrast);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    }
    & .button--primary__outline:hover {
        background: var(--primaryTint);
        border: solid 2px var(--primaryTint);
        color: var(--primaryContrast);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    }
    & .button--danger:hover {
        background: var(--dangerTint);
        border: solid 2px var(--dangerTint);
        color: var(--primaryContrast);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    }
    & .button--danger__outline:hover {
        background: var(--dangerTint);
        border: solid 2px var(--dangerTint);
        color: var(--primaryContrast);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    }
`;
