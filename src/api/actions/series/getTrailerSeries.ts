'use strict';

import { options } from '../../@constants/options';
import { TypeVideoResult, TypeVideos } from '../../types/trailer';

export default async function getTrailerSeries(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${movie_id}/videos?language=pt-BR`,
    options
  );

  const data = (await response.json()) as TypeVideos;
  const dataResults = data.results as TypeVideoResult[];
  return data.results;
}
