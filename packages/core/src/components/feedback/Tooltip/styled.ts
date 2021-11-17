import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const PopoverWrapper = styled(Popover.Panel)`
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    padding: 4px 6px;
    border-radius: 3px;
`;
