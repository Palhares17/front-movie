'use server';

import { TypeResultsSeries } from '@/api/types/series';
import { options } from '../../constants/options';

export default async function getSeries() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc',
    options
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultsSeries[];
  return dataResults;
}
