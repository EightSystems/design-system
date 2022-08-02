import styled from "styled-components";

import { Button } from "../../forms/Button";
import Box from "../Box";

export const ListItemContainer = styled(Button)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    min-height: 65px;
`;

export const ListItemIconContainer = styled(Box)`
    max-width: 20%;
    display: flex;
    margin-right: 10px;
    justify-content: flex-end;
`;

export const ListItemTextContainer = styled(Box)`
    flex-grow: 1;
`;

export const ListItemRightIconContainer = styled(Box)`
    max-width: 20%;
    position: absolute;
    right: 0px;
`;
