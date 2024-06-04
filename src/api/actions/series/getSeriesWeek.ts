'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultsSeries } from '../../types/series';

export default async function getSeriesWeek(): Promise<
  TypeResultsSeries[] | null
> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?language=pt-BR',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending TV series of the week: ${response.statusText}`
      );
    }

    const data = await response.json();
    const dataResults = data.results as TypeResultsSeries[];
    return dataResults;
  } catch (error) {
    console.error('Error fetching trending TV series of the week:', error);
    return null;
  }
}
