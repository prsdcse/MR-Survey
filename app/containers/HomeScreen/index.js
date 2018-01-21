import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native';
import {Button, MenuHeader} from '../../components';
import { connect } from 'react-redux';

class HomeScreen extends React.Component
{
  constructor(props){
    super(props);
  }

  render()
  {
    const { dispatch } = this.props.navigation;
    const { appStore } = this.props;

    console.warn('App Store', appStore);
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
	              dispatch({ type: 'gotoCuster' })
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

const mapStatetoProps = state => ({
  appStore: state
});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeScreen);
