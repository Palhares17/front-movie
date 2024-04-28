'use server';

import { TypeResultTrading, TypeTranding } from '../types/trading';

export default async function getTrading() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/week?language=pt-BR',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const dataResults = data.results as TypeResultTrading[];

  return dataResults;
}
