'use server';

import { TypeResultsSeries } from '@/api/types/series';
import { options } from '../../constants/options';

export default async function getSeries() {
  const response = await fetch(
    'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1',
    options
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultsSeries[];
  return dataResults;
}
