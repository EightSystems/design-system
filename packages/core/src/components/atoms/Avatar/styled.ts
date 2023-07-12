import styled from "styled-components";
import { backgroundColors } from "../../../theme/mixins/web";

export const AvatarWrapper = styled.div`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};

    ${backgroundColors}

    color: ${({ theme }) => theme.colors.lightTint};

    font-weight: 700;
    line-height: 1;
    user-select: none;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &[data-size="large"] {
        width: ${({ theme }) => theme.spacing.xxlg};
        height: ${({ theme }) => theme.spacing.xxlg};
        font-size: ${({ theme }) => theme.typography.fontSizes.xxl};
    }
    &[data-size="medium"] {
        width: ${({ theme }) => theme.spacing.xlg};
        height: ${({ theme }) => theme.spacing.xlg};
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    }
    &[data-size="small"] {
        width: ${({ theme }) => theme.spacing.lg};
        height: ${({ theme }) => theme.spacing.lg};
        font-size: ${({ theme }) => theme.typography.fontSizes.md};
    }
    &[data-size="xs"] {
        width: ${({ theme }) => theme.spacing.md};
        height: ${({ theme }) => theme.spacing.md};
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    }
    &[data-size="xxs"] {
        width: ${({ theme }) => theme.spacing.sm};
        height: ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.typography.fontSizes.xxs};
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
