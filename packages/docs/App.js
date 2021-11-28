import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import ThemeProviderInjector from "../core/src/components/core/ThemeProviderInjector";
import { nativeTheme } from "../core/src/theme";
import NativeUIExplorer from "./src/views/NativeUIExplorer";

const App = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
            <StatusBar barStyle={Platform.OS == "ios" ? "dark-content" : "default"} />
            <ThemeProviderInjector theme={nativeTheme}>
                <NativeUIExplorer />
            </ThemeProviderInjector>
        </SafeAreaView>
    );
};

export default App;
