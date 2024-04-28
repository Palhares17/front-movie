'use server';

import { TypeResultsSeries } from '../types/series';

export default async function getSeriesWeek() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/tv/week?language=pt-BR',
    {
			method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  const dataResults = data.results as TypeResultsSeries[];

  return dataResults;
}
