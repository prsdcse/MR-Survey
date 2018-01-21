import HomeScreen from '../containers/HomeScreen';
import ClusterScreen from "../containers/ClusterScreen";
import DashboardScreen from '../containers/DashboardScreen';
import HouseHoldScreen from '../containers/HouseHoldScreen';
import AddIndividualScreen from '../containers/AddIndividualScreen';
import ViewClusterScreen from '../containers/ViewClusterScreen';
import ViewHouseholdDetails from '../containers/ViewHouseholdDetails';

const Routes = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: '',
            header: null
        }
    },
    ClusterScreen: {
        screen: ClusterScreen,
        navigationOptions: {
            title: 'Cluster Information'
        }
    },
    DashboardScreen: {
        screen: DashboardScreen,
        navigationOptions: {
            title: 'Survey Dashboard'
        }
    },
    HouseHoldScreen: {
        screen: HouseHoldScreen,
        navigationOptions: {
            title: 'Household Information'
        },
        headerRight: (
            <Button
                buttonStyle={{ width: 80, height: 35, backgroundColor: '#1D8348' }}
                fontSize={12}
                title='Submit'
                onPress={() => navigate('Dashboard')}
            />
        )
    },
    AddIndividualScreen: {
        screen: AddIndividualScreen,
        navigationOptions: {
            title: 'Add Hosuehold'
        }
    },
    ViewClusterScreen: {
        screen: ViewClusterScreen,
        navigationOptions: {
            title: 'Cluster Details'
        }
    },
    ViewHouseholdDetails: {
        screen: ViewHouseholdDetails,
        navigationOptions: {
            title: 'Household Details'
        }
    }
}