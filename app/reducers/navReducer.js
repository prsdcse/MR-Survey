import {AppNavigator} from '../AppNavigation';
import { NavigationActions } from 'react-navigation';

const NavReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToHome':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'HomeScreen' }),
                state
            );
            break;
         case 'goToCluster':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ClusterScreen' }),
                state
            );
            break;
        case 'goToDashboard':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DashboardScreen' }),
                state
            );
            break;
        case 'goToHouseHold':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'HouseHoldScreen' }),
                state
            );
            break;
        case 'goToAddIndividual':
        newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'AddIndividualScreen' }),
              {...state, webViewURL : action.webViewURL}
        );
        case 'goToViewCluster':
        newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ViewClusterScreen' }),
              {...state, webViewURL : action.webViewURL}
        );
        case 'goToViewHousehold':
        newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'ViewHouseholdDetails' }),
              {...state, webViewURL : action.webViewURL}
        );
        break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;