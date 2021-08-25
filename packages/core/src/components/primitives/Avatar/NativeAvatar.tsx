import * as React from "react";
import * as S from "./styled.native";
import { NativeAvatarProps } from "./types";

const Avatar = React.forwardRef<HTMLHeadingElement, NativeAvatarProps>(
    ({ children, alt, src, size, ...props }, componentRef) => {
        return (
            <S.AvatarWrapper {...props} ref={componentRef} data-size={size}>
                {src ? <S.Image accessibilityLabel={alt} source={src} /> : null}
                {children ? <S.FallbackText>{children}</S.FallbackText> : null}
            </S.AvatarWrapper>
        );
    }
);

export default React.memo(Avatar);
