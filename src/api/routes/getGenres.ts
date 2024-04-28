'use server';

import { TypeColectionGenre } from '../types/genre';

export default async function getGenres() {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?language=pt-BRs',
    {
			method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  ); 

  const data = (await response.json()) as TypeColectionGenre;
	
  return data.genres;
}
