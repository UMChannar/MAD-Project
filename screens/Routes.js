import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Login';
import Onboarding from './Onboard';
import Signup from './Signup';
import Recommended from './RecommendedFlights';
import Book from './BookFlights';
import User from './UserProfile';

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

function Test() {
  return (
    <drawer.Navigator initialRouteName="Available Flights">
      <drawer.Screen
        name="Profile"
        component={User}
        options={{headerShown: false}}
      />
      <drawer.Screen
        name="Available Flights"
        component={Recommended}
        options={{headerShown: false}}
      />
      <drawer.Screen
        name="Book Flights"
        component={Book}
        options={{headerShown: false}}
      />
      <drawer.Screen
        name="Logout"
        component={Login}
        options={{headerShown: false}}
      />
    </drawer.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="test"
        component={Test}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={User}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
