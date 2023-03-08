import React from 'react';
import { AnimatedCardList } from '../../components/AnimatedCard';
import { Page } from '../../components/Page';
import useFlatList from '../../hooks/useFlatList';
import { Card } from './components/Card';
import { HomeController } from './Home.controller';

const HomeView: React.FC<HomeController> = ({ musics, loading, error }) => {
   const List = useFlatList();

   return (
      <Page>
         <List
            data={musics}
            renderItem={({ item }) => (
               <AnimatedCardList>
                  <Card item={item} />
               </AnimatedCardList>
            )}
            emptyText={error}
            loading={loading}
         />
      </Page>
   );
};

export { HomeView };
