import { mdx as reactMDX } from "@mdx-js/react";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import FlexImage from "react-native-flex-image";
import openUrl from "./openUrl";
import { styles } from "./styles";

const ensureChildrenOrText = (childrenElement, style = null) => {
    return React.Children.map(childrenElement, child => {
        if (typeof child === "string") {
            return <Text style={style}>{child}</Text>;
        }

        return child;
    });
};

const components = {
    div: ({ children }) => <View style={styles.div}>{ensureChildrenOrText(children)}</View>,
    wrapper: ({ children }) => <View style={styles.div}>{ensureChildrenOrText(children)}</View>,
    textgroup: ({ children }) => {
        return <Text style={styles.text}>{children}</Text>;
    },
    inline: ({ children }) => {
        return <Text>{children}</Text>;
    },
    text: ({ children }) => {
        return <Text>{children}</Text>;
    },
    span: ({ children }) => {
        return <Text>{children}</Text>;
    },
    strong: ({ children }) => {
        return <Text style={styles.strong}>{children}</Text>;
    },
    a: ({ href, children }) => {
        return (
            <TouchableOpacity onPress={() => openUrl(href)}>
                <Text style={styles.link}>{children}</Text>
            </TouchableOpacity>
        );
    },
    em: ({ children }) => {
        return <Text style={styles.em}>{children}</Text>;
    },
    h1: ({ children }) => {
        return (
            <View style={styles.headingContainer}>
                <Text style={[styles.heading, styles.heading1]}>{children}</Text>
            </View>
        );
    },
    h2: ({ children }) => {
        return (
            <View style={styles.headingContainer}>
                <Text style={[styles.heading, styles.heading2]}>{children}</Text>
            </View>
        );
    },
    h3: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading3]}>{children}</Text>
        </View>
    ),
    h4: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading4]}>{children}</Text>
        </View>
    ),
    h5: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading5]}>{children}</Text>
        </View>
    ),
    h6: ({ children }) => (
        <View style={styles.headingContainer}>
            <Text style={[styles.heading, styles.heading6]}>{children}</Text>
        </View>
    ),
    p: ({ children }) => {
        var hasImgChild = false;
        React.Children.forEach(children, child => {
            if (typeof child.type != "undefined" && child.type.name == "img") {
                hasImgChild = true;
            }
        });

        if (hasImgChild) {
            return <View>{children}</View>;
        }

        return <Text style={styles.paragraph}>{children}</Text>;
    },
    blockquote: ({ children }) => <View style={styles.blockquote}>{ensureChildrenOrText(children)}</View>,
    inlineCode: ({ children }) => {
        return <Text style={styles.codeInline}>{ensureChildrenOrText(children)}</Text>;
    },
    code: ({ children }) => {
        return <Text style={styles.codeBlock}>{ensureChildrenOrText(children)}</Text>;
    },
    pre: ({ children }) => <View style={styles.pre}>{ensureChildrenOrText(children)}</View>,
    ul: ({ children }) => {
        return <View style={[styles.list, styles.listUnordered]}>{ensureChildrenOrText(children)}</View>;
    },
    ol: ({ children }) => {
        return <View style={[styles.list, styles.listOrdered]}>{ensureChildrenOrText(children)}</View>;
    },
    li: ({ children }) => {
        return (
            <View style={styles.listUnorderedItem}>
                <Text style={styles.listUnorderedItemIcon}>{"\u00B7"}</Text>
                <Text style={[styles.listItem]}>{ensureChildrenOrText(children)}</Text>
            </View>
        );
    },
    table: ({ children }) => <View style={[styles.table]}>{ensureChildrenOrText(children)}</View>,
    thead: ({ children }) => <View style={[styles.tableHeader]}>{ensureChildrenOrText(children)}</View>,
    tbody: ({ children }) => <View>{ensureChildrenOrText(children)}</View>,
    th: ({ children }) => {
        return <View style={[styles.tableHeaderCell]}>{ensureChildrenOrText(children)}</View>;
    },
    tr: ({ children }) => {
        return <View style={[styles.tableRow]}>{ensureChildrenOrText(children)}</View>;
    },
    td: ({ children }) => {
        return <View style={[styles.tableRowCell]}>{ensureChildrenOrText(children)}</View>;
    },
    hr: () => {
        return <View style={[styles.hr]} />;
    },
    br: () => <Text>{"\\n"}</Text>,
    img: ({ src }) => {
        return (
            <View style={styles.image}>
                <FlexImage source={{ uri: src }} loadingComponent={<ActivityIndicator size="large" color="red" />} />
            </View>
        );
    },
};

const mdx = (element, props, ...children) => {
    if (element) {
        if (typeof element === "string") {
            if (typeof components[element] === "undefined") {
                element = "wrapper";
            }
        }

        return reactMDX(components[element] ? components[element] : element, props, ...children);
    } else {
        return <Text>{"ELEMENT IS UNDEFINED"}</Text>;
    }
};

export default mdx;
