'use server';

import { TypeResultsSeries } from '@/api/types/series';
import { optionsReload } from '../../@constants/optionsReload';

export default async function getSeries(
  page: number
): Promise<TypeResultsSeries[] | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${page}`,
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch top rated TV series: ${response.statusText}`
      );
    }

    const data = await response.json();
    const dataResults = data.results as TypeResultsSeries[];
    return dataResults;
  } catch (error) {
    console.error('Error fetching top rated TV series:', error);
    return null;
  }
}
