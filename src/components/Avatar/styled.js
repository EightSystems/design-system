import styled from "styled-components";

export const AvatarWrapper = styled.div`
    font-family: ${props => props.theme.fontFaces.Poppins};
    font-weight: 700;
    line-height: 1;
    user-select: none;

    position: relative;
    overflow: hidden;
    background: ${props => props.theme.colors.grayShade};
    color: ${props => props.theme.colors.background};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &[data-size="large"] {
        width: 156px;
        height: 156px;
        font-size: 48px;
    }
    &[data-size="medium"] {
        width: 100px;
        height: 100px;
        font-size: 36px;
    }
    &[data-size="small"] {
        width: 56px;
        height: 56px;
        font-size: 24px;
    }

    & .avatar__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
