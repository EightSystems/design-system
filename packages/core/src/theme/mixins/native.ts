import { css } from "styled-components/native";

export const textColors = css`
    ${props =>
        props["data-textcolor"] == "primary"
            ? css`
                  color: ${({ theme }) => theme.colors.primary};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "primaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "primaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "primaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "secondary"
            ? css`
                  color: ${({ theme }) => theme.colors.secondary};
              `
            : null} 
    ${props =>
        props["data-textcolor"] == "secondaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryShade};
              `
            : null}       
    ${props =>
        props["data-textcolor"] == "secondaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "secondaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "tertiary"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiary};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "tertiaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "tertiaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "tertiaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "success"
            ? css`
                  color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "successShade"
            ? css`
                  color: ${({ theme }) => theme.colors.successShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "successTint"
            ? css`
                  color: ${({ theme }) => theme.colors.successTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "successContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "warning"
            ? css`
                  color: ${({ theme }) => theme.colors.warning};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "warningShade"
            ? css`
                  color: ${({ theme }) => theme.colors.warningShade};
              `
            : null}        
    ${props =>
        props["data-textcolor"] == "warningTint"
            ? css`
                  color: ${({ theme }) => theme.colors.warningTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "warningContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.warningContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "danger"
            ? css`
                  color: ${({ theme }) => theme.colors.danger};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "dangerShade"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "dangerTint"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "dangerContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "dark"
            ? css`
                  color: ${({ theme }) => theme.colors.dark};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "darkShade"
            ? css`
                  color: ${({ theme }) => theme.colors.darkShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "darkTint"
            ? css`
                  color: ${({ theme }) => theme.colors.darkTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "darkContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.darkContrast};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "medium"
            ? css`
                  color: ${({ theme }) => theme.colors.medium};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "mediumShade"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "mediumTint"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "mediumTint"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "light"
            ? css`
                  color: ${({ theme }) => theme.colors.light};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "lightShade"
            ? css`
                  color: ${({ theme }) => theme.colors.lightShade};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "lightTint"
            ? css`
                  color: ${({ theme }) => theme.colors.lightTint};
              `
            : null}
    ${props =>
        props["data-textcolor"] == "lightContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.lightContrast};
              `
            : null}
`;

export const backgroundColors = css`
    ${props =>
        props["data-backgroundcolor"] == "primary"
            ? css`
                  color: ${({ theme }) => theme.colors.primary};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.primaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "secondary"
            ? css`
                  color: ${({ theme }) => theme.colors.secondary};
              `
            : null} 
    ${props =>
        props["data-backgroundcolor"] == "secondaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryShade};
              `
            : null}       
    ${props =>
        props["data-backgroundcolor"] == "secondaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "secondaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.secondaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiary"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiary};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryShade"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryTint"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.tertiaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "success"
            ? css`
                  color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successShade"
            ? css`
                  color: ${({ theme }) => theme.colors.successShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successTint"
            ? css`
                  color: ${({ theme }) => theme.colors.successTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warning"
            ? css`
                  color: ${({ theme }) => theme.colors.warning};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warningShade"
            ? css`
                  color: ${({ theme }) => theme.colors.warningShade};
              `
            : null}        
    ${props =>
        props["data-backgroundcolor"] == "warningTint"
            ? css`
                  color: ${({ theme }) => theme.colors.warningTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warningContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.warningContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "danger"
            ? css`
                  color: ${({ theme }) => theme.colors.danger};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerShade"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerTint"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.dangerContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dark"
            ? css`
                  color: ${({ theme }) => theme.colors.dark};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkShade"
            ? css`
                  color: ${({ theme }) => theme.colors.darkShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkTint"
            ? css`
                  color: ${({ theme }) => theme.colors.darkTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.darkContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "medium"
            ? css`
                  color: ${({ theme }) => theme.colors.medium};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumShade"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumTint"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumTint"
            ? css`
                  color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "light"
            ? css`
                  color: ${({ theme }) => theme.colors.light};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightShade"
            ? css`
                  color: ${({ theme }) => theme.colors.lightShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightTint"
            ? css`
                  color: ${({ theme }) => theme.colors.lightTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightContrast"
            ? css`
                  color: ${({ theme }) => theme.colors.lightContrast};
              `
            : null}
`;

export const letterSpacings = css`
    ${props =>
        props["data-letterspacing"] == "xxs"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xxs};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "xs"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xs};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "sm"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.sm};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "default"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.default};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "md"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.md};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "lg"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.lg};
              `
            : null}
    ${props =>
        props["data-letterspacing"] == "xl"
            ? css`
                  letter-spacing: ${({ theme }) => theme.nativeTypography.lineHeights.xl};
              `
            : null}
`;

export const lineHeights = css`
    ${props =>
        props["data-lineheight"] == "none"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.none + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "shorther"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.shorter + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "short"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.short + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "base"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.base + `px`};
              `
            : null} 
    ${props =>
        props["data-lineheight"] == "tall"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.tall + `px`};
              `
            : null}
    ${props =>
        props["data-lineheight"] == "taller"
            ? css`
                  line-height: ${({ theme }) => theme.nativeTypography.lineHeights.taller + `px`};
              `
            : null}
`;

export const fontSizes = css`
    ${props =>
        props["data-fontsize"] == "xxxs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxxs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xs"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xs};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "sm"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.sm};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "md"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.md};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "lg"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.lg};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xl"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xl};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxl"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxl};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "xxlg"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.xxlg};
              `
            : null}
    ${props =>
        props["data-fontsize"] == "display"
            ? css`
                  font-size: ${({ theme }) => theme.nativeTypography.fontSizes.display};
              `
            : null}
`;

export const fontFaces = css`
    ${props =>
        props["data-fontface"] == "primaryRegular"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryRegular};
              `
            : null}
    ${props =>
        props["data-fontface"] == "primaryMedium"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryMedium};
              `
            : null}
    ${props =>
        props["data-fontface"] == "primarySemibold"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primarySemibold};
              `
            : null}
    ${props =>
        props["data-fontface"] == "primaryBold"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryBold};
              `
            : null}
    ${props =>
        props["data-fontface"] == "secondaryRegular"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondaryRegular};
              `
            : null}
    ${props =>
        props["data-fontface"] == "secondaryMedium"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondaryMedium};
              `
            : null}
    ${props =>
        props["data-fontface"] == "secondarySemibold"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondarySemibold};
              `
            : null}
    ${props =>
        props["data-fontface"] == "secondaryBold"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondaryBold};
              `
            : null}
`;
