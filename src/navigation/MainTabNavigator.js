import React from 'react';
import {
  Platform,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../config/Theme';
import InstaFont from '../components/InstaFont';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LikesScreen from '../screens/LikesScreen';

import CreatePostStack from './CreatePostStack';
import ProfileStack from './ProfileStack';
import UserAvatar from '../components/common/UserAvatar';

import Colors from '../colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps,
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:  ({ navigation }) => ({
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'home',
          size: 30,
        }),
        headerLeft: (null
        ),
        headerRight: (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Photo")}
          >
            <InstaFont
              name="camera"
              size={30}
              style={{ marginRight: 10, marginBottom: 0, color: Colors.actionColor }}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'search',
          size: 45,
        }),
        headerLeft: (
          <View style = {{marginLeft: 22}}>
            <Image source = {require('../../assets/images/ucablogoxd.png')} style = {{width: 30, height: 32}}/>
          </View>
        ),
      },
    },
    CreatePost: {
      screen: CreatePostStack,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarVisible: false,
        tabBarIcon: <Image source={require('../../assets/images/logillomain.png')} style={{ width: 45, height: 45 }} />
      },
    },
    Likes: {
      screen: LikesScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: createTabBarIconWrapper(InstaFont, {
          name: 'heart',
          size: 25,
        }),
        headerLeft: (
          <View style = {{marginLeft: 22}}>
            <Image source = {require('../../assets/images/ucablogoxd.png')} style = {{width: 30, height: 32}}/>
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        ...defaultNavigationOptions,
        tabBarIcon: (<UserAvatar />),
        headerLeft: (
          <View style = {{marginLeft: 22}}>
            <Image source = {require('../../assets/images/ucablogoxd.png')} style = {{width: 30, height: 32}}/>
          </View>
        ),
      },
    },
  },
  {
    // initialRouteName: 'Profile',
    navigationOptions: ({ navigation }) => ({

    }),
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'screen',

    tabBarOptions: {
      inactiveTintColor: colors.tabIconDefault,
      activeTintColor: colors.tabIconSelected,
      showLabel: false,
      style: {
        backgroundColor: colors.backgroundGrey,
      },
    }
  }
);
