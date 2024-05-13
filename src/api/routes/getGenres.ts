'use server';

import { options } from '../constants/optionsReload';
import { TypeColectionGenre } from '../types/genre';

export default async function getGenres() {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=pt-BRs',
    options
  );

  const data = (await response.json()) as TypeColectionGenre;

  return data.genres;
}
