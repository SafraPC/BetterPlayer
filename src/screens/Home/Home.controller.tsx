import { useCallback, useEffect, useState } from 'react';
import { MusicsDomain } from './aplication/Home.domain';
import musicsMock from '../../mocks/musics.json';

export interface HomeController {
   musics?: MusicsDomain[];
   loading: boolean;
   error?: string;
}

const homeController = (): HomeController => {
   const [musics, setMusics] = useState<MusicsDomain[]>(musicsMock);
   const [error, setError] = useState<string>();
   const [loading, setLoading] = useState(false);

   const readMusics = useCallback(async () => {
      try {
         setLoading(true);
      } catch (err) {
         console.log('err', err);
         setError('Houve um erro ao buscar as músicas internas do dispositivo');
      } finally {
         setLoading(false);
      }
   }, []);

   useEffect(() => {
      readMusics();
   }, [readMusics]);

   return {
      musics,
      loading,
      error,
   };
};

export { homeController };
