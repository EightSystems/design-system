import styled from "styled-components";

export const AvatarWrapper = styled.div`
    font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    background: ${({ theme }) => theme.colors.mediumShade};
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
        font-family: ${({ theme }) => theme.typography.fontSizes.xxl};
    }
    &[data-size="medium"] {
        width: ${({ theme }) => theme.spacing.xlg};
        height: ${({ theme }) => theme.spacing.xlg};
        font-family: ${({ theme }) => theme.typography.fontSizes.xxl};
    }
    &[data-size="small"] {
        width: ${({ theme }) => theme.spacing.lg};
        height: ${({ theme }) => theme.spacing.lg};
        font-family: ${({ theme }) => theme.typography.fontSizes.md};
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
