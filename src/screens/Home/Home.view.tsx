import React from 'react';
import { AnimatedCardList } from '../../components/AnimatedCard';
import { Page } from '../../components/Page';
import useFlatList from '../../hooks/useFlatList';
import { MusicCard } from '../../components/MusicCard';
import { HomeController } from './Home.controller';

const HomeView: React.FC<HomeController> = ({ musics, loading, error }) => {
   const List = useFlatList();

   return (
      <Page>
         <List
            data={musics}
            renderItem={({ item }) => (
               <AnimatedCardList>
                  <MusicCard item={item} />
               </AnimatedCardList>
            )}
            emptyText={error}
            loading={loading}
         />
      </Page>
   );
};

export { HomeView };
