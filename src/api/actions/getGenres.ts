'use server';

import { options } from '../@constants/options';
import { TypeColectionGenre } from '../types/genre';

export default async function getGenres() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR',
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as TypeColectionGenre;

    return data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}
