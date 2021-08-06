import styled, { css } from "styled-components/native";
import { Pressable, Text } from "react-native";

export const ButtonPressable = styled(Pressable)`
    border-radius: ${props => props.borderRadius || "5px"};
    background: ${props => props.theme.colors.primary};
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${props =>
        props["data-size"] == "small"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.default}`};
              `
            : null}
    ${props =>
        props["data-size"] == "large"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.default}`};
              `
            : null}
    ${props =>
        props["data-color"] == "primary"
            ? css`
                  color: ${props => props.theme.colors.primaryContrast};
                  ${props =>
                      props["data-variant"] === "solid"
                          ? css`
                                background: ${props => props.theme.colors.primary};
                            `
                          : null}
                  ${props =>
                      props["data-variant"] == "outline"
                          ? css`
                                background: transparent;
                                border: solid 2px ${props.theme.colors.primary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "secondary"
            ? css`
                  color: ${props => props.theme.colors.secondaryContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.secondary};
                            `
                          : null}
                  ${props =>
                      props["data-variant"] == "outline"
                          ? css`
                                background: transparent;
                                border: solid 2px ${props.theme.colors.secondary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "tertiary"
            ? css`
                  border: solid 2px ${props => props.theme.colors.tertiary};
                  color: ${props => props.theme.colors.tertiaryContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.tertiary};
                            `
                          : null}
                  ${props =>
                      props["data-variant"] == "outline"
                          ? css`
                                background: transparent;
                                border: solid 2px ${props.theme.colors.tertiary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "danger"
            ? css`
                  border: solid 2px ${props => props.theme.colors.danger};
                  color: ${props => props.theme.colors.dangerContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.danger};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "success"
            ? css`
                  border: solid 2px ${props => props.theme.colors.success};
                  color: ${props => props.theme.colors.successContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.success};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "warning"
            ? css`
                  border: solid 2px ${props => props.theme.colors.warning};
                  color: ${props => props.theme.colors.warningContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.warning};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "dark"
            ? css`
                  border: solid 2px ${props => props.theme.colors.dark};
                  color: ${props => props.theme.colors.darkContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.dark};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "medium"
            ? css`
                  border: solid 2px ${props => props.theme.colors.medium};
                  color: ${props => props.theme.colors.darkContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.medium};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color"] == "light"
            ? css`
                  border: solid 2px ${props => props.theme.colors.light};
                  color: ${props => props.theme.colors.lightContrast};
                  ${props =>
                      props["data-variant"] == "solid"
                          ? css`
                                background: ${props => props.theme.colors.light};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-variant"] == "outline"
            ? css`
                  background: transparent;
              `
            : null}
    ${props =>
        props["data-variant"] == "ghost"
            ? css`
                  background: transparent;
                  border: none;
              `
            : null}
`;

export const StyledText = styled(Text)`
    text-align: center;
    font-family: ${props => props.theme.nativeTypography.fontFaces.primaryBold};
    color: ${props => props.theme.colors.primaryContrast};

    ${props =>
        props["data-size"] == "small"
            ? css`
                  font-size: 14px;
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  font-size: 16px;
              `
            : null}
    ${props =>
        props["data-size"] == "large"
            ? css`
                  font-size: 20px;
              `
            : null}
`;
