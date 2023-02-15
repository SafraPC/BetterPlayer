import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigation = () => {
   const { Navigator, Screen } = createDrawerNavigator();

   return (
      <Navigator initialRouteName="Home">
         <Screen name="Home" component={Home} />
         <Screen name="Login" component={Login} />
      </Navigator>
   );
};

export default DrawerNavigation;
