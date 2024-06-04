'use server';

import { options } from '@/api/@constants/options';
import { TypeTVShow } from '@/api/types/detailsSeries';

export default async function getDetailsSeries(
  id: number
): Promise<TypeTVShow | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch TV series details: ${response.statusText}`
      );
    }

    const data = (await response.json()) as TypeTVShow;
    return data;
  } catch (error) {
    console.error('Error fetching TV series details:', error);
    return null;
  }
}
