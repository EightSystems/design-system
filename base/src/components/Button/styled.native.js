import React from 'react';
import { Pressable } from 'react-native';

import styled, {css} from "styled-components/native";

const Button = ({style, children, onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <ButtonLabel style={style}>
                {children}
            </ButtonLabel>
        </Pressable>
    )
}

const ButtonLabel = styled.Text `
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
    text-decoration: none;
`

export const ButtonWrapper = styled(Button)`
    border-radius: 6px;
    padding: 12px 22px;
    text-align: center; 

    ${props => props['data-color'] == 'primary' ? css`
        background: ${props => props.theme.colors.primary};
        border: solid 2px ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryContrast};

        ${props => props['data-outline'] ? css`
            background: transparent;
            border: solid 2px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.primary};
        ` : null}
    ` : null}

    ${props => props['data-color'] == 'danger' ? css`
        background: ${props => props.theme.colors.danger};
        border: solid 2px ${props => props.theme.colors.danger};
        color: ${props => props.theme.colors.primaryContrast};

        ${props => props['data-outline'] ? css`
            background: white;
            border: solid 2px ${props => props.theme.colors.danger};
            color: ${props => props.theme.colors.danger};
        ` : null}
    ` : null}

    ${props => props['data-color'] == 'secondary' ? css`
        background: ${props => props.theme.colors.textBody};
        border: solid 2px ${props => props.theme.colors.textBody};
        color: ${props => props.theme.colors.primaryContrast};

        ${props => props['data-outline'] ? css`
            background: white;
            border: solid 2px ${props => props.theme.colors.textBody};
            color: ${props => props.theme.colors.textBody};
        ` : null}
    ` : null}
`;
