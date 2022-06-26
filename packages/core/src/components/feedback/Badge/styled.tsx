import styled, { css } from "styled-components";
import { CenteredFlexBox } from "../../layout/FlexBox";

export const BadgeStyled = styled(CenteredFlexBox)`
    ${props => {
        const badgeSize = props["size"] || "sm";

        if (typeof props.theme.spacing[badgeSize] != "undefined") {
            return css`
                width: ${props.theme.spacing[badgeSize]};
                height: ${props.theme.spacing[badgeSize]};
            `;
        }

        return null;
    }};
`;
