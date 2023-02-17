import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStack } from './login';
import { RegisterStack } from './register';
import { useTheme } from 'styled-components/native';

const Routes = () => {
   const Navigation = createBottomTabNavigator();
   const { colors } = useTheme();
   return (
      <NavigationContainer>
         <Navigation.Navigator
            screenOptions={{
               tabBarActiveTintColor: colors.softGreen,
               tabBarInactiveTintColor: colors.white,
               tabBarLabelStyle: {
                  fontSize: 16,
               },
               tabBarIcon: () => null,
               tabBarStyle: {
                  position: 'absolute',
                  bottom: 25,
                  left: 20,
                  right: 20,
                  backgroundColor: colors.secondary,
                  borderRadius: 15,
                  height: 90,
               },
            }}
            initialRouteName="LoginStack">
            <Navigation.Screen
               name="LoginStack"
               component={LoginStack}
               options={{
                  title: 'Login',
               }}
            />
            <Navigation.Screen
               name="RegisterStack"
               component={RegisterStack}
               options={{
                  title: 'Register',
               }}
            />
         </Navigation.Navigator>
      </NavigationContainer>
   );
};

export default Routes;
