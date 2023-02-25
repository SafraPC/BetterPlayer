import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Playlists from '../../screens/Playlists';

const PlaylistStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen name="playlists" component={Playlists} />
      </Stack.Navigator>
   );
};

export { PlaylistStack };
