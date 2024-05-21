'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultsSeries } from '../../types/series';

export default async function getSeriesWeek() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/tv/week?language=pt-BR',
    optionsReload
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultsSeries[];

  return dataResults;
}
