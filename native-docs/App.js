import React from "react";

import { SafeAreaView, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import Theme from "../base/src/styles/theme";
import NativeUIExplorer from "./src/views/NativeUIExplorer";

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <StatusBar />
      <ThemeProvider theme={Theme}>
        <NativeUIExplorer />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
