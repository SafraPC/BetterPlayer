import React from 'react';
import { homeController } from './Home.controller';
import { HomeView } from './Home.view';

const Home = () => {
   const { musics } = homeController();

   return <HomeView musics={musics} />;
};

export { Home };
