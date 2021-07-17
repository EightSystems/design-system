import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Text
} from 'react-native';

import { ThemeProvider } from "styled-components";

import Theme from "../base/src/styles/theme";

import MdxContent from '../base/src/stories/Button.stories';

const App = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
                <ThemeProvider theme={Theme}>
                    <MdxContent />
                </ThemeProvider>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
