/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
//import { Font } from 'expo';
import HomeScreen from './app/containers/HomeScreen';
import ClusterScreen from "./app/containers/ClusterScreen";
import DashboardScreen from './app/containers/DashboardScreen';
import HouseHoldScreen from './app/containers/HouseHoldScreen';
import AddIndividualScreen from './app/containers/AddIndividualScreen';
import ViewClusterScreen from './app/containers/ViewClusterScreen';
import ViewHouseholdDetails from './app/containers/ViewHouseholdDetails';


const App = StackNavigator({
  Intro: { screen: HomeScreen },
  SignIn: { screen: ClusterScreen },
  Dashboard: { screen: DashboardScreen },
  HouseHold: { screen: HouseHoldScreen },
  AddIndividual: { screen: AddIndividualScreen },
  ViewClusterScreen: { screen: ViewClusterScreen },
  ViewHouseholdDetails: { screen: ViewHouseholdDetails }
});

export default class MainView extends Component {
  render() {
    return (<App />)
  }
}