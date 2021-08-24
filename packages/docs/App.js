import React from "react";

import { SafeAreaView, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";

import { nativeTheme } from "../core/src/theme";
import NativeUIExplorer from "./src/views/NativeUIExplorer";

const App = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
            <StatusBar />
            <ThemeProvider theme={nativeTheme}>
                <NativeUIExplorer />
            </ThemeProvider>
        </SafeAreaView>
    );
};

export default App;
