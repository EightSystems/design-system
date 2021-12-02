import * as React from "react";
import * as S from "./styled";
import { WebAvatarProps } from "./types";

export const Avatar = React.forwardRef<HTMLHeadingElement, WebAvatarProps>(
    ({ children, alt, src, size, ...props }, componentRef) => {
        return (
            <S.AvatarWrapper {...props} ref={componentRef} data-size={size}>
                {src ? <img className="avatar__image" alt={alt} src={src} /> : children}
            </S.AvatarWrapper>
        );
    }
);

export default Avatar;
