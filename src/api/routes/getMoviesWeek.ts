'use server';

import { TypeResultMovies } from "../types/movies";

export default async function getMoviesWeek() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?language=pt-BR',
    {
			method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
	const dataResults = data.results as TypeResultMovies[];
	
	return dataResults;
}
