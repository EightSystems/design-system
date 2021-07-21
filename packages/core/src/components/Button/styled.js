import styled from "styled-components";

export const ButtonWrapper = styled.button`
    font-family: ${props => props.theme.fontFaces.primary};
    font-size: 16px;
    appearance: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    padding: 18px 24px;
    text-decoration: none;
    text-align: center;
    transition: 150ms ease-in-out;
    user-select: none;

    &[data-color="primary"] {
        background: ${props => props.theme.colors.primary};
        border: solid 2px ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryContrast};

        &[data-outline="true"] {
            background: none;
            border: solid 2px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
        }
        &:hover,
        :focus {
            background: ${props => props.theme.colors.primaryTint};
            border: solid 2px ${props => props.theme.colors.primaryTint};
            color: ${props => props.theme.colors.primaryContrast};
            box-shadow: ${props => props.theme.boxShadow.default};
            outline: none;
        }
    }

    &[data-color="danger"] {
        background: ${props => props.theme.colors.danger};
        border: solid 2px ${props => props.theme.colors.danger};
        color: ${props => props.theme.colors.primaryContrast};

        &[data-outline="true"] {
            background: none;
            border: solid 2px ${props => props.theme.colors.danger};
            color: ${props => props.theme.colors.danger};
        }
        &:hover,
        :focus {
            background: ${props => props.theme.colors.dangerTint};
            border: solid 2px ${props => props.theme.colors.dangerTint};
            color: ${props => props.theme.colors.primaryContrast};
            box-shadow: ${props => props.theme.boxShadow.default};
            outline: none;
        }
    }

    &[data-color="secondary"] {
        background: ${props => props.theme.colors.textBody};
        border: solid 2px ${props => props.theme.colors.textBody};
        color: ${props => props.theme.colors.primaryContrast};

        &[data-outline="true"] {
            background: none;
            border: solid 2px ${props => props.theme.colors.textBody};
            color: ${props => props.theme.colors.textBody};
        }
        &:hover,
        :focus {
            background: ${props => props.theme.colors.grayShade};
            border: solid 2px ${props => props.theme.colors.grayShade};
            color: ${props => props.theme.colors.primaryContrast};
            box-shadow: ${props => props.theme.boxShadow.default};
            outline: none;
        }
    }
`;
