// actions/movie/getWatchProviders.ts

'use server';

import { options } from '../../@constants/options';

interface TypeProvider {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

interface TypeProviders {
  link: string;
  rent: TypeProvider[];
  flatrate: TypeProvider[];
  buy: TypeProvider[];
}

interface TypeProvidersArray {
  id: number;
  results: {
    [country: string]: TypeProviders;
  };
}

export default async function getProviders(
  movie_id: number
): Promise<TypeProvider[] | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch providers: ${response.statusText}`);
    }

    const data = (await response.json()) as TypeProvidersArray;
    return data.results['BR']?.flatrate;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
