'use server';

import { optionsReload } from '../../constants/optionsReload';
import { TypeResultMovies } from '../../types/movies';

export default async function getMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc',
    optionsReload
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultMovies[];
  return dataResults;
}
