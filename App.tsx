import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import Routes from './src/navigation/stacks';
import { StatusBar } from 'expo-status-bar';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <StatusBar style="auto" />
         <Routes />
      </ThemeProvider>
   );
};

export default App;
