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
                  background-color: ${({ theme }) => theme.colors.primary};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.primaryShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.primaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "primaryContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.primaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "secondary"
            ? css`
                  background-color: ${({ theme }) => theme.colors.secondary};
              `
            : null} 
    ${props =>
        props["data-backgroundcolor"] == "secondaryShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.secondaryShade};
              `
            : null}       
    ${props =>
        props["data-backgroundcolor"] == "secondaryTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.secondaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "secondaryContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.secondaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiary"
            ? css`
                  background-color: ${({ theme }) => theme.colors.tertiary};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.tertiaryShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.tertiaryTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "tertiaryContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.tertiaryContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "success"
            ? css`
                  background-color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.successShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.successTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "successContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.successContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warning"
            ? css`
                  background-color: ${({ theme }) => theme.colors.warning};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warningShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.warningShade};
              `
            : null}        
    ${props =>
        props["data-backgroundcolor"] == "warningTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.warningTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "warningContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.warningContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "danger"
            ? css`
                  background-color: ${({ theme }) => theme.colors.danger};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.dangerShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.dangerTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dangerContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.dangerContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "dark"
            ? css`
                  background-color: ${({ theme }) => theme.colors.dark};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.darkShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.darkTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "darkContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.darkContrast};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "medium"
            ? css`
                  background-color: ${({ theme }) => theme.colors.medium};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.mediumShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "mediumTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.mediumTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "light"
            ? css`
                  background-color: ${({ theme }) => theme.colors.light};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightShade"
            ? css`
                  background-color: ${({ theme }) => theme.colors.lightShade};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightTint"
            ? css`
                  background-color: ${({ theme }) => theme.colors.lightTint};
              `
            : null}
    ${props =>
        props["data-backgroundcolor"] == "lightContrast"
            ? css`
                  background-color: ${({ theme }) => theme.colors.lightContrast};
              `
            : null}
`;

export const borderColors = css`
    ${props =>
        props["data-bordercolor"] == "primary"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.primary}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "primaryShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.primaryShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "primaryTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.primaryTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "primaryContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.primaryContast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "secondary"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.secondary}`};
              `
            : null} 
    ${props =>
        props["data-bordercolor"] == "secondaryShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.secondaryShade}`};
              `
            : null}       
    ${props =>
        props["data-bordercolor"] == "secondaryTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.secondaryTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "secondaryContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.secondaryContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "tertiary"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.tertiary}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "tertiaryShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.tertiaryShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "tertiaryTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.tertiaryTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "tertiaryContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.tertiaryContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "success"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.success}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "successShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.successShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "successTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.successTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "successContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.successContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "warning"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.warning}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "warningShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.warningShade}`};
              `
            : null}        
    ${props =>
        props["data-bordercolor"] == "warningTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.warningTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "warningContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.warningContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "danger"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.danger}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "dangerShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.dangerShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "dangerTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.dangerTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "dangerContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.dangerContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "dark"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.dark}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "darkShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.darkShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "darkTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.darkTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "darkContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.darkContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "medium"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.medium}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "mediumShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.mediumShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "mediumTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.mediumTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "mediumContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.mediumContrast}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "light"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.light}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "lightShade"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.lightShade}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "lightTint"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.lightTint}`};
              `
            : null}
    ${props =>
        props["data-bordercolor"] == "lightContrast"
            ? css`
                  border: ${({ theme }) => `solid 2px ${theme.colors.lightContrast}`};
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

export const textAlign = css`
    ${props =>
        props["data-textalign"] == "center"
            ? css`
                  text-align: center;
              `
            : null}

    ${props =>
        props["data-textalign"] == "left"
            ? css`
                  text-align: left;
              `
            : null}

    ${props =>
        props["data-textalign"] == "right"
            ? css`
                  text-align: right;
              `
            : null}

    ${props =>
        props["data-textalign"] == "justify"
            ? css`
                  text-align: justify;
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
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primarySemiBold};
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
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondarySemiBold};
              `
            : null}
    ${props =>
        props["data-fontface"] == "secondaryBold"
            ? css`
                  font-family: ${({ theme }) => theme.nativeTypography.fontFaces.secondaryBold};
              `
            : null}
`;
