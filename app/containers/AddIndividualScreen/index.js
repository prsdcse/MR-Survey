import React from 'react';
import { StyleSheet, View, ScrollView, DatePickerAndroid, Switch } from 'react-native';
import { FormRow, colors, Button, AddCardHeader, FormInput, RadioButton, FormLabel } from '../../components';
import Text from '../../components/text/Text';

export default class AddIndividualScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dobStatus: true,
            male: true,
            female: false,
            availability: true,
            dob: ''
        }
    }

    async openDatePicker() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date()
            })
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({ dob: `${day}-${month + 1}-${year}` });
                console.warn(day, month, year);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
    render() {
        const { dispatch } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <AddCardHeader
                        mainTitle="Add Individual"
                        subTitle="Enter individual information for household"
                    />
                    <FormRow
                        style={styles.headingLetter}
                        label='Name' />
                    <Text style={styles.headingLetter}>Do you know DOB ?</Text>
                    <Switch value={this.state.dobStatus}
                        onValueChange={() => this.setState({
                            dobStatus: !this.state.dobStatus
                        })} />
                    {(this.state.dobStatus) &&
                        <View>
                        <FormInput
                            placeholder='Date of Birth'
                            value={this.state.dob}
                            onFocus={() => {
                                this.openDatePicker()
                            }
                            }

                        />
                        </View>
                    }
                    {(!this.state.dobStatus) &&
                        <FormRow
                            style={styles.headingLetter}
                            label='Completed Age' />
                    }
                    <Text style={styles.headingLetter}>Household Status</Text>
                    <RadioButton
                        title='Male'
                        textStyle={{ color: '#4B5461', opacity: 0.5 }}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({
                            male: !this.state.male,
                            female: false
                        })}
                        size={24}
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        checked={this.state.male}
                    />
                    <RadioButton
                        title='Female'
                        textStyle={{ color: '#4B5461', opacity: 0.5 }}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        onPress={() => this.setState({
                            female: !this.state.female,
                            male: false

                        })}
                        size={24}
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        checked={this.state.female}
                    />
                    <Text style={styles.headingLetter}>Availability - Will you be available for next 3-4 days during the survey ?</Text>
                    <Switch value={this.state.availability}
                        onValueChange={() => this.setState({
                            availability: !this.state.availability
                        })} />

                    <Button
                        buttonStyle={{ marginTop: 30, marginBottom: 30, backgroundColor: '#8795A8' }}
                        title='Add'
                        onPress={() => dispatch({type: 'gotoHouseHold'})}
                    />

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    disabledButton: {
        backgroundColor: '#E9EFF7',
    },
    headingLetter: {
        color: '#3E4A59',
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 15,
    }
});

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(AddIndividualScreen);