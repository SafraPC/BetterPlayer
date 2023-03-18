import React from 'react';
import { SearchController } from './Search.controller';
import { SearchView } from './Search.view';

const Search: React.FC = () => {
   const searchController = SearchController();
   return <SearchView {...searchController} />;
};

export { Search };
