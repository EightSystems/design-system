import styled from "styled-components";
import Box from "../../layout/Box";

export const CircleChecked = styled(Box)`
    border-radius: 5px;
    background-color: ${props => props.color};
    width: 10px;
    height: 10px;
`;
