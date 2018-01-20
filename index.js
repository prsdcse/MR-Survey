import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainView from './App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

export default class mrSurvey extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({ isLoading: false }))
        }
    }

    render() {
        if (this.state.isLoading) {
            return null;
        }

        return (
            <Provider store={this.state.store}>
                <MainView />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('surveypremium', () => mrSurvey);
