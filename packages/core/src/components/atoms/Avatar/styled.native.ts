import styled, { css } from "styled-components/native";

export const AvatarWrapper = styled.View`
    background: ${({ theme }) => theme.colors.mediumShade};
    color: ${({ theme }) => theme.colors.lightTint};

    align-items: center;
    justify-content: center;
    border-radius: 1000px;

    ${props =>
        props["data-size"] == "large"
            ? css`
                  width: ${({ theme }) => theme.spacing.xxlg};
                  height: ${({ theme }) => theme.spacing.xxlg};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  width: ${({ theme }) => theme.spacing.xlg};
                  height: ${({ theme }) => theme.spacing.xlg};
              `
            : null}
    ${props =>
        props["data-size"] == "small"
            ? css`
                  width: ${({ theme }) => theme.spacing.lg};
                  height: ${({ theme }) => theme.spacing.lg};
              `
            : null}
`;

export const Image = styled.Image`
    ${props =>
        props["data-size"] == "large"
            ? css`
                  width: ${({ theme }) => theme.spacing.xxlg};
                  height: ${({ theme }) => theme.spacing.xxlg};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  width: ${({ theme }) => theme.spacing.xlg};
                  height: ${({ theme }) => theme.spacing.xlg};
              `
            : null}
    ${props =>
        props["data-size"] == "small"
            ? css`
                  width: ${({ theme }) => theme.spacing.lg};
                  height: ${({ theme }) => theme.spacing.lg};
              `
            : null}

    border-radius: 1000px;
    resize-mode: cover;
`;

export const FallbackText = styled.Text`
    font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryBold};

    ${props =>
        props["data-size"] == "large"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxl};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.lg};
              `
            : null}
    ${props =>
        props["data-size"] == "small"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.md};
              `
            : null}
`;
