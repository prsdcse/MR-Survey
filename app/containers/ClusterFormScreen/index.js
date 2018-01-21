import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {FormLogin, Button, CheckBox} from '../../components';

export default class ClusterFormScreen extends React.Component
{
  constructor(props){
    super(props);
  }

  render ()
  {
    const { dispatch } = this.props.dispatch;
    return (
    <ScrollView style={{backgroundColor: 'white', paddingTop: 40, }}>
      <FormLogin
        label='Cluster ID' />

      <FormLogin
        label='Village/Town' />

      <View>
        <Button
          buttonStyle={{marginTop: 75, marginBottom: 30 }}
          title='Start the Survey'
          onPress={() =>
            dispatch({type: 'gotoDashboard'})
          }
        />          
      </View>
    </ScrollView>
    );
  }
}

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(ClusterFormScreen);