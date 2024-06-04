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
  rent?: TypeProvider[];
  flatrate?: TypeProvider[];
  buy?: TypeProvider[];
}

interface TypeProvidersArray {
  id: number;
  results: {
    [country: string]: TypeProviders;
  };
}

export default async function getWatchProviderSeries(
  movie_id: number
): Promise<TypeProvider[] | undefined> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}/watch/providers?locale=BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch TV series watch providers: ${response.statusText}`
      );
    }

    const data = (await response.json()) as TypeProvidersArray;

    // Verificamos se existem provedores flatrate disponíveis para o país BR
    const flatrateProviders = data.results['BR']?.flatrate;

    // Se existirem provedores flatrate, retornamos. Caso contrário, retornamos undefined.
    return flatrateProviders || undefined;
  } catch (error) {
    console.error('Error fetching TV series watch providers:', error);
    return undefined;
  }
}
