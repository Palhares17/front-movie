import { headers } from 'next/headers';
import { optionsReload } from '../../constants/optionsReload';

export default async function getTheatres() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&region=br',
    optionsReload
  );

  const data = (await response.json()) as TypeTheatres;

  return data.results;
}
