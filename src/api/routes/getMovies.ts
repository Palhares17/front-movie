'use server';

export default async function getMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR',
    {
      headers: {
        method: 'GET',
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
	const dataResults = data.results;
	
	return dataResults;
}
