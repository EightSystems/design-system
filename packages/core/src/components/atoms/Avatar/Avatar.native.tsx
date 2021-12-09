import * as React from "react";
import * as S from "./styled.native";
import { AvatarProps } from "./types";

const Avatar = React.memo<AvatarProps>(({ children, alt, src, size, ...props }: AvatarProps) => {
    return (
        <S.AvatarWrapper {...props} data-size={size}>
            {src ? (
                <S.Image accessibilityLabel={alt} source={{ uri: src }} data-size={size} />
            ) : (
                children && <S.FallbackText data-size={size}>{children}</S.FallbackText>
            )}
        </S.AvatarWrapper>
    );
});

export default Avatar;
