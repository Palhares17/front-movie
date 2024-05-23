'use server';

import { TypeResultsSeries } from '@/api/types/series';
import { optionsReload } from '../../@constants/optionsReload';

export default async function getSeries(page: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${page}`,
    optionsReload
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultsSeries[];
  return dataResults;
}
