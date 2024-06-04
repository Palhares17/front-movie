'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultMovies } from '../../types/movies';

export default async function getMovies(
  page: number
): Promise<TypeResultMovies[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`,
      optionsReload
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results as TypeResultMovies[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
