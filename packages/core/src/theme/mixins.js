import { css } from "styled-components";

export const letterSpacings = css`
    &[data-letterspacing="xxs"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.xxs};
    }
    &[data-letterspacing="xs"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.xs};
    }
    &[data-letterspacing="sm"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.sm};
    }
    &[data-letterspacing="default"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.default};
    }
    &[data-letterspacing="md"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.md};
    }
    &[data-letterspacing="lg"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.lg};
    }
    &[data-letterspacing="xl"] {
        line-height: ${({ theme }) => theme.typography.letterSpacings.xl};
    }
`;

export const lineHeights = css`
    &[data-letterspacing="none"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.none};
    }
    &[data-letterspacing="shorter"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.shorter};
    }
    &[data-letterspacing="short"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.short};
    }
    &[data-letterspacing="base"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.base};
    }
    &[data-letterspacing="tall"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.tall};
    }
    &[data-letterspacing="taller"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.taller};
    }
`;

export const fontWeights = css`
    &[data-fontweights="hairline"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.hairline};
    }
    &[data-fontweights="thin"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.thin};
    }
    &[data-fontweights="light"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.light};
    }
    &[data-fontweights="normal"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
    }
    &[data-fontweights="medium"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    }
    &[data-fontweights="semibold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    }
    &[data-fontweights="bold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    }
    &[data-fontweights="extrabold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.extrabold};
    }
    &[data-fontweights="black"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.black};
    }
`;

export const fontSizes = css`
    &[data-fontsize="xxxs"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xxxs};
    }
    &[data-fontsize="xxs"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xxs};
    }
    &[data-fontsize="xs"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    }
    &[data-fontsize="sm"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    }
    &[data-fontsize="md"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.md};
    }
    &[data-fontsize="lg"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    }
    &[data-fontsize="xl"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xl};
    }
    &[data-fontsize="xxl"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xxl};
    }
    &[data-fontsize="xxlg"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.xxxl};
    }
    &[data-fontsize="display"] {
        font-size: ${({ theme }) => theme.typography.fontSizes.display};
    }
`;

export const fontFaces = css`
    &[data-fontface="primary"] {
        font-family: ${({ theme }) => theme.typography.fontFaces.primary};
    }
    &[data-fontface="secondary"] {
        font-family: ${({ theme }) => theme.typography.fontFaces.secondary};
    }
`;

export const nativeFontFaces = css`
    &[data-fontface="primaryRegular"] {
        font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryRegular};
    }
    &[data-fontface="primaryMedium"] {
        font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryMedium};
    }
    &[data-fontface="primarySemibold"] {
        font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primarySemibold};
    }
    &[data-fontface="primaryBold"] {
        font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryBold};
    }
`;
