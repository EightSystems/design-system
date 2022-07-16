import React from "react";
import { TextField, TextFieldProps } from "../../forms/TextField";

export const SearchBar = (props: TextFieldProps) => {
    return <TextField {...props} icon={"fa-search"} iconFamily={"FontAwesome"} iconPosition={"start"} />;
};

export default SearchBar;
