import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
    StyleSheet,
} from 'react-native';

import configureStore from './store/configureStore';
import AppNavigation from './appNavigation';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({ isLoading: false }))
        }
    }
    //store = configureStore();

    render() {
        if (this.state.isLoading) {
            return null;
        }
        return (
            <Provider store={this.state.store}>
                <AppNavigation />
            </Provider>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
});