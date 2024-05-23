'use server';

import { options } from '../../@constants/options';
import { TypeDetailsMovie } from '../../types/detailsMovies';

export default async function getDetailsMovie(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter os detalhes do filme (Status ${response.status})`
      );
    }

    const data = (await response.json()) as TypeDetailsMovie;

    return data;
  } catch (error) {
    console.error('Erro ao obter os detalhes do filme:', error);
    return null;
  }
}
