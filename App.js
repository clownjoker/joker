import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LoginScreen from './src/screen/Login';
import HomeScreen from './src/screen/Home';
import ChatScreen from './src/screen/Chats';
import ItemScreen from './src/screen/Item';

import SettingScreen from './src/screen/Settings';
import DecorScreen from './src/screen/Decor Gallery';
import ExpertsScreen from './src/screen/Experts';
import RateScreen from './src/screen/Rate us';
import NotificationScreen from './src/screen/Notifications';
import DrawerScreen from './src/routes/DrawerNav';
import ProfileScreen from './src/screen/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="login"
      drawerStyle={{width: '90%'}}
      drawerContent={() => <DrawerScreen />}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="drawer">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="drawer" component={DrawerScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen name="rate" component={RateScreen} />
        <Stack.Screen name="experts" component={ExpertsScreen} />
        <Stack.Screen name="decor" component={DecorScreen} />
        <Stack.Screen name="setting" component={SettingScreen} />
        <Stack.Screen name="Home">{() => <MyDrawer />}</Stack.Screen>
        <Stack.Screen name="chat" component={ChatScreen} />
        <Stack.Screen name="item" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default class App extends Component {
  render() {
    return <MyStack />;
  }
}

const styles = StyleSheet.create({});

// constructor(props) {
//   super(props);
//   this.state = {};
// }

// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();
// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Login"
//       drawerStyle={{width: '90%'}}
//       drawerContent={() => <DrawerS />}>
//       <Drawer.Screen name="login" component={Login} />
//       <Drawer.Screen name="home" component={Home} />
//       <Drawer.Screen name="profile" component={Profile} />
//     </Drawer.Navigator>
//   );
// }
