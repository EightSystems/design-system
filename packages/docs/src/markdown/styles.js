// Styles used for the components. Change to your liking. Some styles may
// be superfluous or not working, this list is not tested.
// Copied from https://github.com/mientjan/react-native-markdown-renderer and modified slightly.

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {},
    view: {},
    codeBlock: {
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
    codeInline: {
        borderWidth: 1,
        borderColor: "rgb(238, 238, 238)",
        backgroundColor: "white",
        borderRadius: 4,
        fontFamily: "Ubuntu Mono",
        fontStyle: "italic",
        fontSize: 16,
        color: "rgba(51, 51, 51, 0.9)",
    },
    del: {
        fontFamily: "Inter Regular",
        backgroundColor: "#000000",
    },
    em: {
        fontFamily: "Inter Bold",
        fontStyle: "italic",
    },
    headingContainer: {
        fontFamily: "Inter Regular",
        flexDirection: "row",
    },
    heading: {
        fontFamily: "Inter SemiBold",
    },
    heading1: {
        fontSize: 32,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    heading2: {
        fontSize: 24,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    heading3: {
        fontSize: 18,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    heading4: {
        fontSize: 16,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    heading5: {
        fontSize: 13,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    heading6: {
        fontSize: 11,
        fontWeight: "700",
        paddingBottom: 8,
        paddingTop: 16,
    },
    hr: {
        backgroundColor: "#000000",
        height: 1,
    },
    blockquote: {
        fontFamily: "Inter Regular",
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        backgroundColor: "#CCCCCC",
    },
    inlineCode: {
        fontFamily: "Inter Regular",
        borderRadius: 3,
        borderWidth: 1,
        fontFamily: "Courier",
        fontWeight: "bold",
    },
    list: {},
    listItem: {
        fontFamily: "Inter Regular",
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
        flexWrap: "wrap",
    },
    listUnordered: {},

    listUnorderedItem: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },

    listUnorderedItemIcon: {
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 30,
        marginBottom: 10,
        marginTop: 10,
        fontFamily: "Inter Bold",
        fontSize: 40,
    },
    listUnorderedItemText: {
        fontSize: 20,
        lineHeight: 20,
    },

    listOrdered: {},
    listOrderedItem: {
        flexDirection: "row",
    },
    listOrderedItemIcon: {
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 30,
    },
    listOrderedItemText: {
        fontWeight: "bold",
        fontFamily: "Inter Bold",
        lineHeight: 20,
    },
    div: {},
    paragraph: {
        fontFamily: "Inter Regular",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    hardbreak: {
        width: "100%",
        height: 1,
    },
    strong: {
        fontWeight: "bold",
        fontFamily: "Inter Bold",
    },
    table: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 3,
    },
    tableHeader: {},
    tableHeaderCell: {
        flex: 1,
        // color: '#000000',
        padding: 5,
        // backgroundColor: 'green',
    },
    tableRow: {
        borderBottomWidth: 1,
        borderColor: "#000000",
        flexDirection: "row",
    },
    tableRowCell: {
        flex: 1,
        padding: 5,
    },
    text: {},
    strikethrough: {
        textDecorationLine: "line-through",
    },
    pre: {
        fontFamily: "Inter Regular",
    },
    link: {
        fontFamily: "Inter Regular",
        marginTop: 0,
        marginBottom: 0,
    },
    image: {
        flex: 1,
    },
});
