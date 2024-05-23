'use strict';

import { options } from '../../@constants/options';
import { TypeVideoResult, TypeVideos } from '../../types/trailer';

export default async function getTrailerSeries(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}/videos?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter trailer da série (Status ${response.status})`
      );
    }

    const data = await response.json();
    const dataResults = data.results as TypeVideoResult[];
    return dataResults;
  } catch (error) {
    console.error('Erro ao obter trailer da série:', error);
    return null;
  }
}
