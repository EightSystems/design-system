import React from "react";
import { ListStyled } from "./internal-styled";
import { ListProps } from "./types";

export const List = ({ keyExtractor, renderItem, data, extraData, ...otherProps }: ListProps) => {
    return (
        <ListStyled
            keyExtractor={keyExtractor}
            data={data}
            renderItem={renderItem}
            extraData={extraData}
            {...otherProps}
        />
    );
};
