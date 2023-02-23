import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';

const LoginStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen
            name="Login"
            component={Login}
            options={{
               title: 'Login',
            }}
         />
      </Stack.Navigator>
   );
};

export { LoginStack };