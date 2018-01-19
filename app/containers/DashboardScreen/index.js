import React from 'react'
import {View} from 'react-native';
import {ProfileMenuHeader} from '../../components';

export default class DashboardScreen extends React.Component
{
  static navigationOptions = {
    title: 'Survey Dashboard'
  };

  state = {
    selectedTab: 'Dashboard'
  };

  render()
  {
    return (
      <View style={{backgroundColor: '#F2F5FB', flex: 1,}}>
        <ProfileMenuHeader
            headingIcon="SD"
            heading="Survey Dashboard"
            icon1Title="Add Household"
            icon2Title="Edit Cluster"
            icon3Title="Survey Details"
            icon4Title="Completed Survey"
            icon5Title="Other Details"
            icon6Title="Submit Census"
            navigation={this.props.navigation}
          />
      </View>
    );
  }
}