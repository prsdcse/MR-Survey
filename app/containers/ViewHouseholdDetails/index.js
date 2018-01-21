import React from 'react';
import { StyleSheet, View, ScrollView, DatePickerAndroid, Switch } from 'react-native';
import { Card, colors, WalletHeader } from '../../components';
import Text from '../../components/text/Text';

export default class ViewHouseholdDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dobStatus: true,
            male: true,
            female: false,
            availability: true
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ backgroundColor: 'white' }}>
                <WalletHeader
                    headingIcon="W"
                    heading="WantLine"
                    rightIcon="pencil-square"
                />
                <WalletHeader
                    headingIcon="D"
                    heading="DaneBroose"
                    rightIcon="pencil-square"
                />
                <WalletHeader
                    headingIcon="H"
                    heading="Hyatt"
                    rightIcon="pencil-square"
                />
                <WalletHeader
                    headingIcon="S"
                    heading="Salvadar"
                    rightIcon="pencil-square"
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
    }
});

const mapStatetoProps = state => ({});

function mapDispatchtoProps(dispatch){
  return {
    dispatch
  }

}

export default connect(mapStatetoProps, mapDispatchtoProps)(ViewHouseholdDetails);