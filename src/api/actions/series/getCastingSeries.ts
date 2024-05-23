'use server';

import { options } from '../../@constants/options';

export interface CastMemberSeries {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  character: string;
  credit_id: string;
  order: number;
}

interface TypeCasting {
  cast: CastMemberSeries[];
}

export default async function getCastingSeries(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${movie_id}/credits?language=pt-BR`,
    options
  );

  const data = (await response.json()) as TypeCasting;
	console.log(data.cast)
  return data.cast;
}
