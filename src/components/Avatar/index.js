import React from "react";
import styled from 'styled-components';
import Proptypes from "prop-types";
import { GlobalStyles } from '../../styles/theme'
import * as V from "../../styles/variables"

const AvatarWrapper = styled.div `
    ${GlobalStyles};
    font-family: ${V.FontFaces.Poppins};
    font-weight: 700;
    line-height: 1;
    user-select: none;

    position: relative;
    overflow: hidden;
    background: var(--grayShade);
    color: var(--background);
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
`

const Avatar = ({ children, alt, src, size, className }) => {

    return (
        <AvatarWrapper 
            className={className}
            data-size={size}
        >
            {src ? <img className="avatar__image" alt={alt} src={src} /> : null}
            {children ? children : null}
        </AvatarWrapper>
    );
};

Avatar.propTypes = {
    children: Proptypes.node,
    alt: Proptypes.string,
    src: Proptypes.string,
    size: Proptypes.oneOf(["large", "medium", "small"]).isRequired,
    className: Proptypes.string,
};

export default Avatar;

