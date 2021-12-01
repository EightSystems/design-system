import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";
import { Box } from "../../layout/Box";

export const ToastWrapper = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 3px;
`;

export const CloseButton = ({ onClick, children }) => <Pressable onPress={onClick}>{children}</Pressable>;
