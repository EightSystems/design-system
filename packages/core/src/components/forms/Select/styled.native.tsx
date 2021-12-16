import styled from "styled-components";
import Box from "../../layout/Box";
import { Icon } from "../../primitives/Icon";
import { Text } from "../../typography/Text";
import { Button } from "../Button";

export const MainWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const InputLabel = styled(Text)`
    padding-bottom: 4px;
`;

export const SelectComponent = styled(Button)`
    padding: 12px 12px;
    width: 100%;
`;

export const InputValidationMessage = styled(Text)`
    padding-left: 2px;
`;

export const InputValidationContainer = styled(Box)`
    padding-top: 6px;
    display: flex;
    flex-direction: row;
    min-height: ${({ theme }) => theme.elements.minHeight.small};
    align-items: flex-start;
`;

export const InputValidationIcon = styled(Icon)`
    padding-top: 3px;
`;
