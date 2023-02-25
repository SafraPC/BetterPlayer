import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/index';
import { Container } from './src/styles/default';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Container>
            <StatusBar style="light" />
            <AppNavigation />
         </Container>
      </ThemeProvider>
   );
};

export default App;
