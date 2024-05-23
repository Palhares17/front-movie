'use strict';

import { options } from '../../@constants/options';
import { TypeVideoResult, TypeVideos } from '../../types/trailer';

export default async function getTrailerMovie(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter o trailer do filme (Status ${response.status})`
      );
    }

    const data = (await response.json()) as TypeVideos;
    const dataResults = data.results as TypeVideoResult[];

    return dataResults;
  } catch (error) {
    console.error('Erro ao obter o trailer do filme:', error);
    return null;
  }
}
