import React from "react";
import Proptypes from "prop-types";
import classnames from "classnames";
import * as S from "./styles";

const Avatar = ({ children, alt, src, size, className }) => {
    const avatarWrapperClasses = classnames({
        "avatar__wrapper--large": size === "large",
        "avatar__wrapper--medium": size === "medium",
        "avatar__wrapper--small": size === "small",
    });

    return (
        <S.AvatarWrapper>
            <div className={`${className ? className + " " : ""}avatar__wrapper ${avatarWrapperClasses}`}>
                {src ? <img className="avatar__image" alt={alt} src={src} /> : null}
                {children ? children : null}
            </div>
        </S.AvatarWrapper>
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
