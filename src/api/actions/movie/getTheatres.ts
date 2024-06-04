'use server';

import { TypeTheatresResults, TypeTheatres } from '@/api/types/theatres';
import { optionsReload } from '../../@constants/optionsReload';

export default async function getTheatres(): Promise<TypeTheatresResults[]> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&region=br',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch now playing movies: ${response.statusText}`
      );
    }

    const data = (await response.json()) as TypeTheatres;
    const results = data.results;
    console.log(results);

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
