import React from 'react'
import {View} from 'react-native';
import {ProfileMenuHeader} from '../../components';

export default class DashboardScreen extends React.Component
{
  constructor(props){
    super(props);
  }

  render() 
  {
    const { dispatch } = this.props.navigation;
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
            navigation={dispatch}
          />
      </View>
    );
  }
}

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(DashboardScreen);