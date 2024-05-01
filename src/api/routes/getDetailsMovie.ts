'use server';

import { options } from '../constants/options';
import { TypeDetailsMovie } from '../types/detailsMovies';

export default async function getDetailsMovie(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=pt-BR`,
    options
  );

  const data = (await response.json()) as TypeDetailsMovie;

  return data;
}
