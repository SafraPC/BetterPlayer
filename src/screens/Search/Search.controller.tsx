import { useState } from 'react';
import { MusicsDomain } from '../Home/aplication/Home.domain';
import musicMock from '../../mocks/musics.json';
export interface SearchControllerInterface {
   filteredList: MusicsDomain[];
   filterList: (filter: string) => void;
}

const SearchController = (): SearchControllerInterface => {
   const [filteredList, setFilteredList] = useState<MusicsDomain[]>(musicMock);

   const filterList = (filter: string) => {
      const filtered = musicMock.filter(music =>
         JSON.stringify(music).toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredList(filtered);
   };

   return {
      filteredList,
      filterList,
   };
};

export { SearchController };
