import isString from "lodash/isString";
import * as React from "react";
import * as S from "./styled.native";
import { AvatarProps } from "./types";

const Avatar = React.memo<AvatarProps>(
    ({ children, alt, src, size, backgroundColor = "mediumTint", ...props }: AvatarProps) => {
        const styleProps = {
            "data-backgroundcolor": backgroundColor,
            "data-size": size,
        };

        return (
            <S.AvatarWrapper {...props} {...styleProps}>
                {src ? (
                    <S.Image accessibilityLabel={alt} source={isString(src) ? { uri: src } : src} {...styleProps} />
                ) : (
                    children && <S.FallbackText {...styleProps}>{children}</S.FallbackText>
                )}
            </S.AvatarWrapper>
        );
    }
);

export default Avatar;
