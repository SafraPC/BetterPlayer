import React from 'react';
import { Text } from 'react-native';
import { Page } from '../../components/Page';
import useFlatList from '../../hooks/useFlatList';
import { Card } from './components/Card';
import { HomeController } from './Home.controller';

const HomeView: React.FC<HomeController> = ({ musics, loading, error }) => {
   const List = useFlatList();

   return (
      <Page>
         <Text>oi</Text>
         <List
            data={musics}
            renderItem={({ item }) => <Card item={item} />}
            emptyText={error}
            loading={loading}
         />
      </Page>
   );
};

export { HomeView };
