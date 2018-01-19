import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {FormLogin, Button, CheckBox} from '../../components';

export default class ClusterFormScreen extends React.Component
{
  static navigationOptions = {
    title: ''
  };

  render ()
  {
    const { navigate } = this.props.navigation;
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
            navigate('Dashboard')
          }
        />          
      </View>
    </ScrollView>
    );
  }
}