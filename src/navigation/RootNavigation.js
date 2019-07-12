import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login'
import MainTabNavigator from './MainTabNavigator';
import { colors } from '../config/Theme';
import RegistroScreen from '../screens/formulario';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const RootStackNavigator = StackNavigator(
  {
    
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Registro: {
      screen: RegistroScreen,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default RootStackNavigator;
