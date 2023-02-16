import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStack } from './login';
import { RegisterStack } from './register';

const Routes = () => {
   const Navigation = createBottomTabNavigator();
   return (
      <NavigationContainer>
         <Navigation.Navigator>
            <Navigation.Screen name="Login" component={LoginStack} />
            <Navigation.Screen name="Register" component={RegisterStack} />
         </Navigation.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
