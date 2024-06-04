'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultMovies } from '../../types/movies';

export default async function getMoviesWeek(): Promise<TypeResultMovies[]> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending movies of the week: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.results as TypeResultMovies[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
