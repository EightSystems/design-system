import * as React from "react";
import * as S from "./styled";
import { AvatarProps } from "./types";

export const Avatar = React.memo<AvatarProps>(({ children, alt, src, size, ...props }: AvatarProps) => {
    return (
        <S.AvatarWrapper {...props} data-size={size}>
            {src ? <img className="avatar__image" alt={alt} src={src} /> : children}
        </S.AvatarWrapper>
    );
});

export default Avatar;
