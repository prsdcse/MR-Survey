import React from 'react';
import { StyleSheet, View, ScrollView, DatePickerAndroid, Switch } from 'react-native';
import { Card, colors } from '../../components';
import Text from '../../components/text/Text';

export default class ViewClusterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dobStatus: true,
            male: true,
            female: false,
            availability: true
        }

    }

    static navigationOptions = {
        title: 'Cluster Details View '
    };

    state = {
        selectedTab: 'ViewClusterScreen'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <Card
                        onPress={() => navigate('ViewHouseholdDetails')}
                        title='David, Hollins'
                        subTitle='Household : 123'
                        number='03'
                        expiration='Last Updated : 1/19/2018'
                        moreText='View'
                    >
                    </Card>
                    < Card
                        title='Kevin, Mathew'
                        subTitle='Household : 456'
                        number='05'
                        expiration='Last Updated : 1/19/2018'
                        moreText='View'
                    >
                    </Card>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    }
});