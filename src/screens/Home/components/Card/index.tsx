import React from 'react';
import { Text } from 'react-native';
import { MusicsDomain } from '../../aplication/Home.domain';
import { Container } from './styles';

interface CardProps {
   item: MusicsDomain;
}

const Card: React.FC<CardProps> = ({ item }) => {
   return (
      <Container>
         <Text style={{ color: 'white' }}>{item.url}</Text>
      </Container>
   );
};

export { Card };
