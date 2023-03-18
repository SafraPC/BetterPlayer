import React from 'react';
import { MusicsDomain } from '../../screens/Home/aplication/Home.domain';
import {
   Column,
   Container,
   IconContent,
   Image,
   Subtitle,
   Title,
} from './styles';
import OptionsIcon from 'react-native-vector-icons/SimpleLineIcons';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import DownloadIcon from 'react-native-vector-icons/Feather';

interface MusicCardProps {
   item: MusicsDomain;
}

const MusicCard: React.FC<MusicCardProps> = ({ item }) => {
   return (
      <Container>
         <Image
            source={{
               uri: 'https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w700.jpg',
            }}
         />
         <Column>
            <Title>{item?.name || '-'}</Title>
            <Subtitle>{item?.artist || '-'}</Subtitle>
         </Column>
         <IconContent>
            {item.downloaded && (
               <DownloadIcon name="download" size={20} color="green" />
            )}
         </IconContent>
         <IconContent>
            <HeartIcon
               name={item.liked ? 'heart' : 'hearto'}
               size={20}
               color="white"
            />
         </IconContent>
         <IconContent>
            <OptionsIcon name="options" size={20} color="white" />
         </IconContent>
      </Container>
   );
};

export { MusicCard };
