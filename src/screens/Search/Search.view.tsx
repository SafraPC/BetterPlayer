import React, { useEffect } from 'react';
import { AnimatedCardList } from '../../components/AnimatedCard';
import { MusicCard } from '../../components/MusicCard';
import { Page } from '../../components/Page';
import useFlatList from '../../hooks/useFlatList';
import { SearchControllerInterface } from './Search.controller';
import { Filter } from './Search.styles';

const SearchView: React.FC<SearchControllerInterface> = ({
   filterList,
   filteredList,
}) => {
   const [filter, setFilter] = React.useState<string>('');
   useEffect(() => {
      filterList(filter);
   }, [filter]);

   const List = useFlatList();

   return (
      <Page>
         <Filter
            value={filter}
            onChangeText={setFilter}
            placeholder="ex: Close Friends"
         />
         <List
            data={filteredList}
            renderItem={({ item }) => (
               <AnimatedCardList>
                  <MusicCard item={item} />
               </AnimatedCardList>
            )}
         />
      </Page>
   );
};

export { SearchView };
