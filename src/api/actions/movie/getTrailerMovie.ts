'use server';

import { options } from '../../@constants/options';
import { TypeVideoResult, TypeVideos } from '../../types/trailer';

export default async function getTrailerMovie(
  movie_id: number
): Promise<TypeVideoResult[]> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch trailers: ${response.statusText}`);
    }

    const data = (await response.json()) as TypeVideos;
    return data.results as TypeVideoResult[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
