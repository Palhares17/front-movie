'use strict';

import { options } from '../../@constants/options';
import { TypeVideoResult, TypeVideos } from '../../types/trailer';

export default async function getTrailerMovie(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=pt-BR`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const data = (await response.json()) as TypeVideos;
  const dataResults = data.results as TypeVideoResult[];
  return data.results;
}
