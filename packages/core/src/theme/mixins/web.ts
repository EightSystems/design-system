import { css } from "styled-components";

export const textColors = css`
    &[data-textcolor="primary"] {
        color: ${({ theme }) => theme.colors.primary};
    }
    &[data-textcolor="primaryShade"] {
        color: ${({ theme }) => theme.colors.primaryShade};
    }
    &[data-textcolor="primaryTint"] {
        color: ${({ theme }) => theme.colors.primaryTint};
    }
    &[data-textcolor="primaryContrast"] {
        color: ${({ theme }) => theme.colors.primaryContrast};
    }
    &[data-textcolor="secondary"] {
        color: ${({ theme }) => theme.colors.secondary};
    }
    &[data-textcolor="secondaryShade"] {
        color: ${({ theme }) => theme.colors.secondaryShade};
    }
    &[data-textcolor="secondaryTint"] {
        color: ${({ theme }) => theme.colors.secondaryTint};
    }
    &[data-textcolor="secondaryContrast"] {
        color: ${({ theme }) => theme.colors.secondaryContrast};
    }
    &[data-textcolor="tertiary"] {
        color: ${({ theme }) => theme.colors.tertiary};
    }
    &[data-textcolor="tertiaryShade"] {
        color: ${({ theme }) => theme.colors.tertiaryShade};
    }
    &[data-textcolor="tertiaryTint"] {
        color: ${({ theme }) => theme.colors.tertiaryTint};
    }
    &[data-textcolor="tertiaryContrast"] {
        color: ${({ theme }) => theme.colors.tertiaryContrast};
    }
    &[data-textcolor="success"] {
        color: ${({ theme }) => theme.colors.success};
    }
    &[data-textcolor="successShade"] {
        color: ${({ theme }) => theme.colors.successShade};
    }
    &[data-textcolor="successTint"] {
        color: ${({ theme }) => theme.colors.successTint};
    }
    &[data-textcolor="successContrast"] {
        color: ${({ theme }) => theme.colors.successContrast};
    }
    &[data-textcolor="warning"] {
        color: ${({ theme }) => theme.colors.warning};
    }
    &[data-textcolor="warningShade"] {
        color: ${({ theme }) => theme.colors.warningShade};
    }
    &[data-textcolor="warningTint"] {
        color: ${({ theme }) => theme.colors.warningTint};
    }
    &[data-textcolor="warningContrast"] {
        color: ${({ theme }) => theme.colors.warningContrast};
    }
    &[data-textcolor="danger"] {
        color: ${({ theme }) => theme.colors.danger};
    }
    &[data-textcolor="dangerShade"] {
        color: ${({ theme }) => theme.colors.dangerShade};
    }
    &[data-textcolor="dangerTint"] {
        color: ${({ theme }) => theme.colors.dangerTint};
    }
    &[data-textcolor="dangerContrast"] {
        color: ${({ theme }) => theme.colors.dangerContrast};
    }
    &[data-textcolor="dark"] {
        color: ${({ theme }) => theme.colors.dark};
    }
    &[data-textcolor="darkShade"] {
        color: ${({ theme }) => theme.colors.darkShade};
    }
    &[data-textcolor="darkTint"] {
        color: ${({ theme }) => theme.colors.darkTint};
    }
    &[data-textcolor="darkContrast"] {
        color: ${({ theme }) => theme.colors.darkContrast};
    }
    &[data-textcolor="medium"] {
        color: ${({ theme }) => theme.colors.medium};
    }
    &[data-textcolor="mediumShade"] {
        color: ${({ theme }) => theme.colors.mediumShade};
    }
    &[data-textcolor="mediumTint"] {
        color: ${({ theme }) => theme.colors.mediumTint};
    }
    &[data-textcolor="mediumContrast"] {
        color: ${({ theme }) => theme.colors.mediumContrast};
    }
    &[data-textcolor="light"] {
        color: ${({ theme }) => theme.colors.light};
    }
    &[data-textcolor="lightShade"] {
        color: ${({ theme }) => theme.colors.lightShade};
    }
    &[data-textcolor="lightTint"] {
        color: ${({ theme }) => theme.colors.lightTint};
    }
    &[data-textcolor="lightContrast"] {
        color: ${({ theme }) => theme.colors.lightContrast};
    }
`;

export const backgroundColors = css`
    &[data-backgroundcolor="primary"] {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    &[data-backgroundcolor="primaryShade"] {
        background-color: ${({ theme }) => theme.colors.primaryShade};
    }
    &[data-backgroundcolor="primaryTint"] {
        background-color: ${({ theme }) => theme.colors.primaryTint};
    }
    &[data-backgroundcolor="primaryContrast"] {
        background-color: ${({ theme }) => theme.colors.primaryContrast};
    }
    &[data-backgroundcolor="secondary"] {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    &[data-backgroundcolor="secondaryShade"] {
        background-color: ${({ theme }) => theme.colors.secondaryShade};
    }
    &[data-backgroundcolor="secondaryTint"] {
        background-color: ${({ theme }) => theme.colors.secondaryTint};
    }
    &[data-backgroundcolor="secondaryContrast"] {
        background-color: ${({ theme }) => theme.colors.secondaryContrast};
    }
    &[data-backgroundcolor="tertiary"] {
        background-color: ${({ theme }) => theme.colors.tertiary};
    }
    &[data-backgroundcolor="tertiaryShade"] {
        background-color: ${({ theme }) => theme.colors.tertiaryShade};
    }
    &[data-backgroundcolor="tertiaryTint"] {
        background-color: ${({ theme }) => theme.colors.tertiaryTint};
    }
    &[data-backgroundcolor="tertiaryContrast"] {
        background-color: ${({ theme }) => theme.colors.tertiaryContrast};
    }
    &[data-backgroundcolor="success"] {
        background-color: ${({ theme }) => theme.colors.success};
    }
    &[data-backgroundcolor="successShade"] {
        background-color: ${({ theme }) => theme.colors.successShade};
    }
    &[data-backgroundcolor="successTint"] {
        background-color: ${({ theme }) => theme.colors.successTint};
    }
    &[data-backgroundcolor="successContrast"] {
        background-color: ${({ theme }) => theme.colors.successContrast};
    }
    &[data-backgroundcolor="warning"] {
        background-color: ${({ theme }) => theme.colors.warning};
    }
    &[data-backgroundcolor="warningShade"] {
        background-color: ${({ theme }) => theme.colors.warningShade};
    }
    &[data-backgroundcolor="warningTint"] {
        background-color: ${({ theme }) => theme.colors.warningTint};
    }
    &[data-backgroundcolor="warningContrast"] {
        background-color: ${({ theme }) => theme.colors.warningContrast};
    }
    &[data-backgroundcolor="danger"] {
        background-color: ${({ theme }) => theme.colors.danger};
    }
    &[data-backgroundcolor="dangerShade"] {
        background-color: ${({ theme }) => theme.colors.dangerShade};
    }
    &[data-backgroundcolor="dangerTint"] {
        background-color: ${({ theme }) => theme.colors.dangerTint};
    }
    &[data-backgroundcolor="dangerContrast"] {
        background-color: ${({ theme }) => theme.colors.dangerContrast};
    }
    &[data-backgroundcolor="dark"] {
        background-color: ${({ theme }) => theme.colors.dark};
    }
    &[data-backgroundcolor="darkShade"] {
        background-color: ${({ theme }) => theme.colors.darkShade};
    }
    &[data-backgroundcolor="darkTint"] {
        background-color: ${({ theme }) => theme.colors.darkTint};
    }
    &[data-backgroundcolor="darkContrast"] {
        background-color: ${({ theme }) => theme.colors.darkContrast};
    }
    &[data-backgroundcolor="medium"] {
        background-color: ${({ theme }) => theme.colors.medium};
    }
    &[data-backgroundcolor="mediumShade"] {
        background-color: ${({ theme }) => theme.colors.mediumShade};
    }
    &[data-backgroundcolor="mediumTint"] {
        background-color: ${({ theme }) => theme.colors.mediumTint};
    }
    &[data-backgroundcolor="mediumContrast"] {
        background-color: ${({ theme }) => theme.colors.mediumContrast};
    }
    &[data-backgroundcolor="light"] {
        background-color: ${({ theme }) => theme.colors.light};
    }
    &[data-backgroundcolor="lightShade"] {
        background-color: ${({ theme }) => theme.colors.lightShade};
    }
    &[data-backgroundcolor="lightTint"] {
        background-color: ${({ theme }) => theme.colors.lightTint};
    }
    &[data-backgroundcolor="lightContrast"] {
        background-color: ${({ theme }) => theme.colors.lightContrast};
    }
`;

export const borderColors = css`
    &[data-bordercolor="primary"] {
        border-color: ${({ theme }) => theme.colors.primary};
    }
    &[data-bordercolor="primaryShade"] {
        border-color: ${({ theme }) => theme.colors.primaryShade};
    }
    &[data-bordercolor="primaryTint"] {
        border-color: ${({ theme }) => theme.colors.primaryTint};
    }
    &[data-bordercolor="primaryContrast"] {
        border-color: ${({ theme }) => theme.colors.primaryContrast};
    }
    &[data-bordercolor="secondary"] {
        border-color: ${({ theme }) => theme.colors.secondary};
    }
    &[data-bordercolor="secondaryShade"] {
        border-color: ${({ theme }) => theme.colors.secondaryShade};
    }
    &[data-bordercolor="secondaryTint"] {
        border-color: ${({ theme }) => theme.colors.secondaryTint};
    }
    &[data-bordercolor="secondaryContrast"] {
        border-color: ${({ theme }) => theme.colors.secondaryContrast};
    }
    &[data-bordercolor="tertiary"] {
        border-color: ${({ theme }) => theme.colors.tertiary};
    }
    &[data-bordercolor="tertiaryShade"] {
        border-color: ${({ theme }) => theme.colors.tertiaryShade};
    }
    &[data-bordercolor="tertiaryTint"] {
        border-color: ${({ theme }) => theme.colors.tertiaryTint};
    }
    &[data-bordercolor="tertiaryContrast"] {
        border-color: ${({ theme }) => theme.colors.tertiaryContrast};
    }
    &[data-bordercolor="success"] {
        border-color: ${({ theme }) => theme.colors.success};
    }
    &[data-bordercolor="successShade"] {
        border-color: ${({ theme }) => theme.colors.successShade};
    }
    &[data-bordercolor="successTint"] {
        border-color: ${({ theme }) => theme.colors.successTint};
    }
    &[data-bordercolor="successContrast"] {
        border-color: ${({ theme }) => theme.colors.successContrast};
    }
    &[data-bordercolor="warning"] {
        border-color: ${({ theme }) => theme.colors.warning};
    }
    &[data-bordercolor="warningShade"] {
        border-color: ${({ theme }) => theme.colors.warningShade};
    }
    &[data-bordercolor="warningTint"] {
        border-color: ${({ theme }) => theme.colors.warningTint};
    }
    &[data-bordercolor="warningContrast"] {
        border-color: ${({ theme }) => theme.colors.warningContrast};
    }
    &[data-bordercolor="danger"] {
        border-color: ${({ theme }) => theme.colors.danger};
    }
    &[data-bordercolor="dangerShade"] {
        border-color: ${({ theme }) => theme.colors.dangerShade};
    }
    &[data-bordercolor="dangerTint"] {
        border-color: ${({ theme }) => theme.colors.dangerTint};
    }
    &[data-bordercolor="dangerContrast"] {
        border-color: ${({ theme }) => theme.colors.dangerContrast};
    }
    &[data-bordercolor="dark"] {
        border-color: ${({ theme }) => theme.colors.dark};
    }
    &[data-bordercolor="darkShade"] {
        border-color: ${({ theme }) => theme.colors.darkShade};
    }
    &[data-bordercolor="darkTint"] {
        border-color: ${({ theme }) => theme.colors.darkTint};
    }
    &[data-bordercolor="darkContrast"] {
        border-color: ${({ theme }) => theme.colors.darkContrast};
    }
    &[data-bordercolor="medium"] {
        border-color: ${({ theme }) => theme.colors.medium};
    }
    &[data-bordercolor="mediumShade"] {
        border-color: ${({ theme }) => theme.colors.mediumShade};
    }
    &[data-bordercolor="mediumTint"] {
        border-color: ${({ theme }) => theme.colors.mediumTint};
    }
    &[data-bordercolor="mediumContrast"] {
        border-color: ${({ theme }) => theme.colors.mediumContrast};
    }
    &[data-bordercolor="light"] {
        border-color: ${({ theme }) => theme.colors.light};
    }
    &[data-bordercolor="lightShade"] {
        border-color: ${({ theme }) => theme.colors.lightShade};
    }
    &[data-bordercolor="lightTint"] {
        border-color: ${({ theme }) => theme.colors.lightTint};
    }
    &[data-bordercolor="lightContrast"] {
        border-color: ${({ theme }) => theme.colors.lightContrast};
    }
`;

export const letterSpacings = css`
    &[data-letterspacing="xxs"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.xxs};
    }
    &[data-letterspacing="xs"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.xs};
    }
    &[data-letterspacing="sm"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.sm};
    }
    &[data-letterspacing="default"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.default};
    }
    &[data-letterspacing="md"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.md};
    }
    &[data-letterspacing="lg"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.lg};
    }
    &[data-letterspacing="xl"] {
        letter-spacing: ${({ theme }) => theme.typography.letterSpacings.xl};
    }
`;

export const lineHeights = css`
    &[data-lineheight="none"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.none};
    }
    &[data-lineheight="shorter"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.shorter};
    }
    &[data-lineheight="short"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.short};
    }
    &[data-lineheight="base"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.base};
    }
    &[data-lineheight="tall"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.tall};
    }
    &[data-lineheight="taller"] {
        line-height: ${({ theme }) => theme.typography.lineHeights.taller};
    }
`;

export const fontWeights = css`
    &[data-fontweight="hairline"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.hairline};
    }
    &[data-fontweight="thin"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.thin};
    }
    &[data-fontweight="light"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.light};
    }
    &[data-fontweight="normal"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
    }
    &[data-fontweight="medium"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    }
    &[data-fontweight="semibold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
    }
    &[data-fontweight="bold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    }
    &[data-fontweight="extrabold"] {
        font-weight: ${({ theme }) => theme.typography.fontWeights.extrabold};
    }
    &[data-fontweight="black"] {
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
    &[data-fontsize="xxxl"] {
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
