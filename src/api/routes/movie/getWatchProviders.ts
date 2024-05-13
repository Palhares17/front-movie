'use server';

import { optionsReload } from '../../constants/optionsReload';
import { TypeDetailsMovie } from '../../types/detailsMovies';

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

export default async function getProviders(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`,
    optionsReload
  );

  const data = (await response.json()) as TypeProvidersArray;
  return data.results['BR']?.flatrate;
}
