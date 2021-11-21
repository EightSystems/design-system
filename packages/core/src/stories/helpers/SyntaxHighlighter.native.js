import React from "react";
import { StyleSheet, Text } from "react-native";

const style = StyleSheet.create({
    codeInline: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 4,
    },
});
export const CodeSyntaxHighlighter = ({ codeString }) => <Text style={style.codeInline}>{codeString}</Text>;
