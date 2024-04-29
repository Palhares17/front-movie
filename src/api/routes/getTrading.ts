'use server';

import { options } from '../constants/options';
import { TypeResultTrading, TypeTranding } from '../types/trading';

export default async function getTrading() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/week?language=pt-BR',
    options
  );
  const data = await response.json();
  const dataResults = data.results as TypeResultTrading[];

  return dataResults;
}
