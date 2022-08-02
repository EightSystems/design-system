import React, { Fragment, useMemo } from "react";
import { ListStyled } from "./internal-styled";
import { ListProps } from "./types";
import isArray from "lodash/isArray";

export const List = ({ keyExtractor, renderItem, data, extraData, ...otherProps }: ListProps) => {
    const listElementsComputed = useMemo(() => {
        return data && isArray(data)
            ? data.map((value, index) => {
                  return (
                      <Fragment key={keyExtractor && keyExtractor(value)}>
                          {renderItem({
                              item: value,
                              index,
                          })}
                      </Fragment>
                  );
              })
            : null;
    }, [data, extraData]);

    return <ListStyled {...otherProps}>{listElementsComputed}</ListStyled>;
};
