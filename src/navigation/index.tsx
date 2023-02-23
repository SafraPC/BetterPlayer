import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from './bottomRoutes';

const Routes = () => {
   return (
      <NavigationContainer>
         <BottomRoutes />
      </NavigationContainer>
   );
};

export default Routes;
