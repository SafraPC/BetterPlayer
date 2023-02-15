import React from 'react';
import StackNavigation from './stacks';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Routes = () => {
   const Navigation = createNativeStackNavigator();
   return (
      <NavigationContainer>
         <Navigation.Navigator>
            <Navigation.Screen name="Bottom" component={BottomNavigation} />
            <Navigation.Screen name="Stack" component={StackNavigation} />
         </Navigation.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
