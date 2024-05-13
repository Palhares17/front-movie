'use server';

import { optionsReload } from '../../constants/optionsReload';

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface TypeCaster {
  id: number;
  cast: CastMember[];
}

export default async function getCreditsMovies(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=pt-BR`,
    optionsReload
  );

  const data = (await response.json()) as TypeCaster;
  return data.cast;
}
