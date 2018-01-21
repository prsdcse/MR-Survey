import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ClusterFormScreen from '../ClusterFormScreen';
import {colors, LoginHeader} from '../../components';

class ClusterScreen extends React.Component
{
  constructor(props){
    super(props);
  }

  render()
  {
    const { dispatch } = this.props.navigation;
    return (      
      <View style={{backgroundColor: 'white'}}>
        <LoginHeader
          headerTitle="Enter your cluster information"
        />
        <ClusterFormScreen dispatch={dispatch}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 0,
  },
});

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(ClusterScreen);
