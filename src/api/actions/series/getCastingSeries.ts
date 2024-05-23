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
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/${movie_id}/credits?language=pt-BR`,
			options
		);

		if (!response.ok) {
      throw new Error(`Erro ao obter detalhes da série (Status ${response.status})`);
    }
		const data = (await response.json()) as TypeCasting;
		return data.cast;

	} catch (error) {
		console.error('Erro ao obter detalhes da série:', error);
    return null;
  }
}
