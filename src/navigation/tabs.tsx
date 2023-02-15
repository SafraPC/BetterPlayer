import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomNavigation = () => {
   const { Navigator, Screen } = createBottomTabNavigator();

   return (
      <Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Screen name="Home" component={Home} />
      </Navigator>
   );
};

export default BottomNavigation;
