import * as React from "react";
import * as S from "./styled";
import { SpinnerWebProps } from "./types";

const Spinner = React.forwardRef<any, SpinnerWebProps>(({ color, size }, componentRef) => {
    return (
        <S.SpinnerContainer size={size} ref={componentRef}>
            <S.SpinnerBody size={size} color={color} />
        </S.SpinnerContainer>
    );
});

export default React.memo(Spinner);
