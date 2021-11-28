import React from "react";
import { StyleSheet, Text } from "react-native";

const style = StyleSheet.create({
    codeInline: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "white",
        padding: 10,
        fontFamily: "Ubuntu Mono",
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        borderRadius: 4,
    },
});
export const CodeSyntaxHighlighter = ({ codeString }) => <Text style={style.codeInline}>{codeString}</Text>;
