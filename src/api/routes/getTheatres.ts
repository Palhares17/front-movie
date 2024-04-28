import { headers } from 'next/headers';

export default async function getTheatres() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&region=br',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

	const data = await response.json() as TypeTheatres;

	return data.results;
}
