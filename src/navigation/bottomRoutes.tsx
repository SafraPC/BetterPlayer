import React from 'react';
import {
   BottomTabNavigationOptions,
   createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { LoginStack } from './login';
import { RegisterStack } from './register';

const BottomRoutes = () => {
   const Navigation = createBottomTabNavigator();

   const styles: BottomTabNavigationOptions = {
      headerShown: false,
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: {
         opacity: 0.5,
         backgroundColor: 'black',
         borderTopWidth: 0,
         position: 'absolute',
         left: 0,
         right: 0,
         bottom: 0,
         height: 85,
         elevation: 1,
      },
      tabBarItemStyle: {
         marginTop: 10,
         justifyContent: 'center',
         alignItems: 'center',
      },
   };

   return (
      <Navigation.Navigator
         screenOptions={styles}
         initialRouteName="LoginStack">
         <Navigation.Screen name="LoginStack" component={LoginStack} />
         <Navigation.Screen name="RegisterStack" component={RegisterStack} />
      </Navigation.Navigator>
   );
};
export { BottomRoutes };
