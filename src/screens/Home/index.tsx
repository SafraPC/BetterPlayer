import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { AppRoutes } from '../../navigation/types';
import { Container, GoToLogin, LoginText, WelcomeText } from './Home.styles';

const Home = () => {
   const navigation = useNavigation<NavigationProp<AppRoutes>>();

   return (
      <Container>
         <WelcomeText>Home!!!</WelcomeText>
         <GoToLogin onPress={() => navigation.navigate('Login')}>
            <LoginText>Logar</LoginText>
         </GoToLogin>
      </Container>
   );
};

export default Home;
