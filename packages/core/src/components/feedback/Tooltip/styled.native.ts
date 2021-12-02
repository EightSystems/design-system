import styled from "styled-components/native";
import { Box } from "../../layout/Box";

export const PopoverWrapper = styled(Box)`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 4px 6px;
    border-radius: 3px;
`;

/*export const TooltipBody = styled(Popover)`
    ${backgroundColors};
    ${borderColors};

    border-radius: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    ${props =>
        props["data-size"] == "small"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xss}`};
              `
            : null}
    ${props =>
        props["data-size"] == "medium"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.default}`};
              `
            : null}
    ${props =>
        props["data-size"] == "large"
            ? css`
                  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.default}`};
              `
            : null}

    ${props =>
        props["data-disabled"]
            ? css`
                  opacity: 0.75;
              `
            : null}
`;*/
