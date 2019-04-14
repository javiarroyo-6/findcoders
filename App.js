import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

//Auth Stack
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
import WelcomeScreen from './src/components/screens/WelcomeScreen'
import SignUpScreen from './src/components/screens/SignUpScreen'
import SignInScreen from './src/components/screens/SignInScreen'
import ForgetPasswordScreen from './src/components/screens/ForgetPasswordScreen'

// App Stack
import HomeScreen from './src/components/screens/HomeScreen'
import SettingsScreen from './src/components/screens/SettingsScreen'
import ProfileScreen from './src/components/screens/ProfileScreen'

// Amplify imports and config
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure(config)


// App tabs located at the bottom of the screen
const configurations = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" style={{fontSize: 26, color: tintColor}} />
      )
    }
  },
}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: 'blue',
    inactiveTintColor: '#a8abaf',
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ff99',//'#667292',
      paddingBottom: 0
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 12,
      marginTop:12,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

// Bottom App tabs
const AppTabNavigator = createMaterialTopTabNavigator(configurations, options)

// Making the common header title dynamic in AppTabNavigator
AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } =   navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}


const AppStackNavigator = createStackNavigator({ // allowing the drawer to open and close when pressed
  Header: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

//App Stack for Drawer
const AppDrawerNavigator = createDrawerNavigator ({
    Tabs: AppStackNavigator,
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen
});



//Auth Stack
const AuthStackNavigator = createStackNavigator({
      Welcome: {
        screen: WelcomeScreen,
        navigationOptions: () => ({
          title: `Welcome to CodeBook!`, // for the header screen
          headerBackTitle: 'Back'
        }),
      },
      SignUp: {
        screen: SignUpScreen,
        navigationOptions: () => ({
          title: "Create a new account",
        })
      },
      SignIn: {
        screen: SignInScreen,
        navigationOptions: () => ({
          title:"Log in to your account",
        })
      },
      ForgetPassword:{
        screen:ForgetPasswordScreen,
        navigationOptions: () => ({ 
          title:"Create a new password",
        })
      },
    });

export default createSwitchNavigator({
  // screen: name
  AuthLoading: AuthLoadingScreen, // First screen for new users   
  Auth: AuthStackNavigator, // Auth stack
  App: AppDrawerNavigator, // the App stack
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

