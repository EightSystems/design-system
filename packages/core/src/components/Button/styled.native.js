import styled, { css } from "styled-components/native";
import { Pressable, Text } from "react-native";

export const ButtonPressable = styled(Pressable)`
    border-radius: ${props => props.borderRadius || "5px"};
    font-weight: 600;
    ${props =>
        props["data-size" == "small"]
            ? css`
                  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.sm}`};
              `
            : null}
    ${props =>
        props["data-color" == "primary"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.primary};
                  color: ${props => props.theme.colors.primaryContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.primary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "secondary"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.secondary};
                  color: ${props => props.theme.colors.secondaryContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.secondary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "tertiary"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.tertiary};
                  color: ${props => props.theme.colors.tertiaryContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.tertiary};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "danger"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.danger};
                  color: ${props => props.theme.colors.dangerContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.danger};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "success"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.success};
                  color: ${props => props.theme.colors.successContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.success};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "warning"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.warning};
                  color: ${props => props.theme.colors.warningContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.warning};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "dark"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.dark};
                  color: ${props => props.theme.colors.darkContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.dark};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "medium"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.medium};
                  color: ${props => props.theme.colors.darkContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.medium};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["data-color" == "light"]
            ? css`
                  border: solid 2px ${props => props.theme.colors.light};
                  color: ${props => props.theme.colors.lightContrast};
                  ${props =>
                      props["variant" == "solid"]
                          ? css`
                                background: ${props => props.theme.colors.light};
                            `
                          : null}
              `
            : null}
    ${props =>
        props["variant" == "outline"]
            ? css`
                  background: transparent;
              `
            : null}
    ${props =>
        props["variant" == "ghost"]
            ? css`
                  background: transparent;
                  border: none;
              `
            : null}
`;
export const StyledText = styled(Text)`
    font-family: ${props => props.theme.fontFaces.primaryMobile};
    font-weight: 600;
`;
