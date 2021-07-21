// To open URLs from Markdown links. Modify as needed. Untested.
// Copied from https://github.com/mientjan/react-native-markdown-renderer

import { Linking } from "react-native";

export default function openUrl(url) {
    if (url) {
        Linking.openURL(url);
    }
}
