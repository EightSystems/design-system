import React from 'react';
import { Text, Pressable } from 'react-native';

import styled, {css} from "styled-components/native";

const ButtonTest = ({style, children, onClick}) => {
    return (
        <Pressable onPress={onClick}>
            <Text style={style}>
                {children}
            </Text>
        </Pressable>
    )
}

export const ButtonWrapper = styled(ButtonTest)`
    font-family: 'System';
    font-size: 16px;
    border-radius: 4px;
    font-weight: 600;
    padding: 18px 24px;
    text-decoration: none;
    text-align: center;

    ${props => props['data-color'] == 'primary' ? css`
        background: ${props => props.theme.colors.primary};
        border: solid 2px ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryContrast};

        ${props => props['data-outline'] ? css`
            background: white;
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
