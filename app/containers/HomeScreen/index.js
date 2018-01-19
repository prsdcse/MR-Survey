import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native';
import {Button, MenuHeader} from '../../components';

export default class HomeScreen extends React.Component
{
  static navigationOptions = {
    header: null
  };

  state = {};

  render()
  {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.header}>
        <StatusBar
          backgroundColor="#2779f4"
          barStyle="light-content"
        />
        <MenuHeader
          mainTitle="Survey Application"
          image={require('../../images/logo.png')}
          imageSize={{width: 150, height: 150}}
         />
         <View style={styles.footer}>
	        <Button
	            buttonStyle={styles.button1}
	            title="Goto Cluster"
	            onPress={() =>
	              navigate('SignIn')
	            }
	          />
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2779f4',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  button1: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 210,
    height: 45,
    backgroundColor: '#2779f4',
  },
});
