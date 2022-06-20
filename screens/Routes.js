import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Onboarding from './Onboard';
import Signup from './Signup';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();
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
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
