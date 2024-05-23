'use server';

import { options } from '../../@constants/options';
import { TypeDetailsMovie } from '../../types/detailsMovies';

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

export default async function getWatchProviderSeries(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}/watch/providers?locale=BR`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter provedores de streaming da série (Status ${response.status})`
      );
    }

    const data = (await response.json()) as TypeProvidersArray;

    return data.results['BR'].flatrate;
  } catch (error) {
    console.error('Erro ao obter provedores de streaming da série:', error);
    return null;
  }
}
