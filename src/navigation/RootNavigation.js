import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { colors } from '../config/Theme';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const RootStackNavigator = StackNavigator(
  {
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
