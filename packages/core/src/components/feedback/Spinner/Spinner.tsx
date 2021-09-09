import * as React from "react";
import * as S from "./styled";
import { WebSpinnerProps } from "./types";

const Spinner = React.forwardRef<any, WebSpinnerProps>(({ color, size }, componentRef) => {
    return (
        <S.SpinnerContainer size={size} ref={componentRef}>
            <S.SpinnerBody size={size} color={color} />
        </S.SpinnerContainer>
    );
});

export default React.memo(Spinner);
