import styled from "styled-components";
import { borderColors } from "../../../theme/mixins/native";
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
    border: ${props => props.theme.borders.default};

    ${borderColors};

    padding: 12px 12px;
    width: 100%;
    border-radius: 4px;
`;

export const InputValidationMessage = styled(Text)`
    padding-left: 2px;
`;

export const InputValidationContainer = styled(Box)`
    padding-top: 6px;
    display: flex;
    flex-direction: row;
    min-height: 26px;
    align-items: flex-start;
`;

export const InputValidationIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.danger};
    padding-top: 3px;
`;

export const InputArrowIcon = styled(Icon)`
    font-size: ${({ theme }) => theme.nativeTypography.fontSizes.sm};
    font-family: ${({ theme }) => theme.nativeTypography.fontFaces.primaryBold};
`;
