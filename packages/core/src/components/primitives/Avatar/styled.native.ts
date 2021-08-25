import styled, { css } from "styled-components/native";

export const AvatarWrapper = styled.View`
    background: ${({ theme }) => theme.colors.mediumShade};
    color: ${({ theme }) => theme.colors.lightTint};
    border-radius: 50%;

    flex: 1;
    align-items: center;
    justify-content: center;

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
        props["data-size"] == "medium"
            ? css`
                  width: ${({ theme }) => theme.spacing.lg};
                  height: ${({ theme }) => theme.spacing.lg};
              `
            : null}
`;
export const Image = styled.Image`
    width: 100%;
    height: 100%;
    resize: cover;
`;

export const FallbackText = styled.Text`
    font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryBold};

    ${props =>
        props["data-size"] == "large"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontSizes.xxl};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontSizes.xxl};
              `
            : null}
    ${props =>
        props["data-size"] == "small"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontSizes.md};
              `
            : null}
`;
