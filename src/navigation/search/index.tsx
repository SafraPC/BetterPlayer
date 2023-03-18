import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../../screens/Search';

const SearchStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen name="search" component={Search} />
      </Stack.Navigator>
   );
};

export { SearchStack };
