import * as React from "react";
import * as S from "./styled";
import { AvatarProps } from "./types";

export const Avatar = React.memo<AvatarProps>(
    ({ children, alt, src, size, backgroundColor = "mediumShade", ...props }: AvatarProps) => {
        const styleProps = {
            "data-backgroundcolor": backgroundColor,
            "data-size": size,
        };

        return (
            <S.AvatarWrapper {...props} {...styleProps}>
                {src ? <img className="avatar__image" alt={alt} src={src} /> : children}
            </S.AvatarWrapper>
        );
    }
);

export default Avatar;
