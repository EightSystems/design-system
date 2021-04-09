import { css } from "styled-components";
import * as V from "./variables";

export const fontFaces = css`
    // Poppins Regular, Medium, Semibold & Bold
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

    // Inter Regular, Medium, Semibold & Bold
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
`;

export const Heading1 = css`
    font-family: ${V.FontFaces.Poppins};
    color: var(--text-primary);
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 48px; 
    }
`;

export const Heading2 = css`
    font-family: ${V.FontFaces.Poppins};
    color: var(--text-primary);
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;  
    }
`;

export const Body = css`
    font-family: ${V.FontFaces.Inter};
    color: var(--text-body);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;  
    }
`;

export const FormLabel = css`
    font-family: ${V.FontFaces.Poppins};
    color: var(--text-body);
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
`;

export const FormInput = css`
    font-family: ${V.FontFaces.Inter};
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;
export const PlaceholderFormInput = css`
    font-family: ${V.FontFaces.Inter};
    color: var(--text-body);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;

export const CurrencyLabel = css`
    font-family: ${V.FontFaces.Poppins};
    color: var(--text-primary);
    font-size: 36px;
    font-weight: 700;

    .styled__comma {
        color: var(--secondary);
    }
`;
