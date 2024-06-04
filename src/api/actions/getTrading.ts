'use server';

import { optionsReload } from '../@constants/optionsReload';
import { TypeResultTrading } from '../types/trading';

export default async function getTrading(): Promise<TypeResultTrading[]> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?language=pt-BR',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch trending data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results as TypeResultTrading[];
  } catch (error) {
    console.error('Error fetching trending data:', error);
    return [];
  }
}
