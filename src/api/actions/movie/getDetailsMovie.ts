'use server';

import { options } from '../../@constants/options';
import { TypeDetailsMovie } from '../../types/detailsMovies';

export default async function getDetailsMovie(
  movie_id: number
): Promise<TypeDetailsMovie | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = (await response.json()) as TypeDetailsMovie;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
