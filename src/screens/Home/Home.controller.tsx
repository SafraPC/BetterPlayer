import { useCallback, useEffect, useState } from 'react';

export interface HomeController {
   musics?: string[];
}

const homeController = (): HomeController => {
   const [musics, setMusics] = useState<string[] | undefined>();
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
   };
};

export { homeController };
