'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultMovies } from '../../types/movies';

export default async function getMoviesWeek() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR',
    optionsReload
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultMovies[];

  return dataResults;
}
