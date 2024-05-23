'use server';

import { optionsReload } from '../@constants/optionsReload';
import { TypeResultTrading } from '../types/trading';

export default async function getTrading() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?language=pt-BR',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter os destaques da semana (Status ${response.status})`
      );
    }

    const data = await response.json();
    const dataResults = data.results as TypeResultTrading[];

    return dataResults;
  } catch (error) {
    console.error('Erro ao obter os destaques da semana:', error);
    return null;
  }
}
