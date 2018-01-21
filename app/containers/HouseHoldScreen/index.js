import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { colors, FormRow, List, Button, ListItem, WalletHeader, RadioButton, Divider } from '../../components';

export default class HouseHoldScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HouseholdStatus1: true,
      HouseholdStatus2: false,
      HouseholdStatus3: false,
      HouseholdStatus4: false,
      HouseholdStatus5: false,
      HouseholdStatus6: false
    }
  }

  render() {
    const { dispatch } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: 'white' }}>

          <FormRow
            label='HouseHold Number' />
          <Text style={styles.headingLetter}>Household Status</Text>
          <RadioButton
            title='Complete'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus1: !this.state.HouseholdStatus1,
              HouseholdStatus2: false,
              HouseholdStatus3: false,
              HouseholdStatus4: false,
              HouseholdStatus5: false,
              HouseholdStatus6: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus1}
          />
          <RadioButton
            title='Complete, Information provided by neigbor'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus2: !this.state.HouseholdStatus2,
              HouseholdStatus1: false,
              HouseholdStatus3: false,
              HouseholdStatus4: false,
              HouseholdStatus5: false,
              HouseholdStatus6: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus2}
          />
          <RadioButton
            title='Incomplete, Locked House'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus3: !this.state.HouseholdStatus3,
              HouseholdStatus2: false,
              HouseholdStatus1: false,
              HouseholdStatus4: false,
              HouseholdStatus5: false,
              HouseholdStatus6: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus3}
          />
          <RadioButton
            title='Incomplete, No competent responded at home'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus4: !this.state.HouseholdStatus4,
              HouseholdStatus2: false,
              HouseholdStatus3: false,
              HouseholdStatus1: false,
              HouseholdStatus5: false,
              HouseholdStatus6: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus4}
          />
          <RadioButton
            title='Incomplete, Refused'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus5: !this.state.HouseholdStatus5,
              HouseholdStatus2: false,
              HouseholdStatus3: false,
              HouseholdStatus4: false,
              HouseholdStatus1: false,
              HouseholdStatus6: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus5}
          />
          <RadioButton
            title='Incomplete, Other'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus6: !this.state.HouseholdStatus6,
              HouseholdStatus2: false,
              HouseholdStatus3: false,
              HouseholdStatus4: false,
              HouseholdStatus5: false,
              HouseholdStatus1: false,
              HouseholdStatus7: false
            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus6}
          />
          <RadioButton
            title='Incomplete, Extended absence (per neighbor)'
            textStyle={{ color: '#4B5461', opacity: 0.5 }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            onPress={() => this.setState({
              HouseholdStatus7: !this.state.HouseholdStatus7,
              HouseholdStatus1: false,
              HouseholdStatus2: false,
              HouseholdStatus3: false,
              HouseholdStatus4: false,
              HouseholdStatus5: false,
              HouseholdStatus6: false

            })}
            size={24}
            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
            checked={this.state.HouseholdStatus7}
          />
          {(this.state.HouseholdStatus1 || this.state.HouseholdStatus2) &&
            <Button
              buttonStyle={{ marginTop: 55, marginBottom: 30 }}
              title='Add Individual'
              onPress={() =>
                dispatch({type: 'gotoAddIndividual'})
              }
            />
          }
          <Divider />
          <WalletHeader
            headingIcon="W"
            heading="WantLine"
            rightIcon='trash'
          />
        </ScrollView>
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
  list: {
    marginTop: 15,
  },
  headingLetter: {
    color: '#3E4A59',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 15,
  },
});

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(HouseHoldScreen);
