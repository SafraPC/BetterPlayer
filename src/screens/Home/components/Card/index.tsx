import React from 'react';
import { Text } from 'react-native';
import { MusicsDomain } from '../../aplication/Home.domain';
import {
   Column,
   Container,
   Image,
   Like,
   Options,
   Subtitle,
   Title,
} from './styles';
import OptionsIcon from 'react-native-vector-icons/SimpleLineIcons';
import HeartIcon from 'react-native-vector-icons/AntDesign';

interface CardProps {
   item: MusicsDomain;
}

const Card: React.FC<CardProps> = ({ item }) => {
   return (
      <Container>
         <Image
            source={{
               uri: 'https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w700.jpg',
            }}
         />
         <Column>
            <Title>Título</Title>
            <Subtitle>Subtitulo</Subtitle>
         </Column>
         <Like>
            <HeartIcon name="hearto" size={20} color="white" />
         </Like>
         <Options>
            <OptionsIcon name="options" size={20} color="white" />
         </Options>
      </Container>
   );
};

export { Card };
