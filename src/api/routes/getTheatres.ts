import { headers } from 'next/headers';
import { options } from '../constants/options';

export default async function getTheatres() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&region=br',
    options
  );

	const data = await response.json() as TypeTheatres;

	return data.results;
}
