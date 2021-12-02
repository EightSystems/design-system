import * as React from "react";
import * as S from "./styled.native";
import { NativeAvatarProps } from "./types";

const Avatar = React.forwardRef<any, NativeAvatarProps>(({ children, alt, src, size, ...props }, componentRef) => {
    return (
        <S.AvatarWrapper {...props} ref={componentRef} data-size={size}>
            {src ? (
                <S.Image accessibilityLabel={alt} source={{ uri: src }} />
            ) : (
                children && <S.FallbackText data-size={size}>{children}</S.FallbackText>
            )}
        </S.AvatarWrapper>
    );
});

export default React.memo(Avatar);
