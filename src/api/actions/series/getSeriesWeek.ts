'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultsSeries } from '../../types/series';

export default async function getSeriesWeek() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?language=pt-BR',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter séries em destaque da semana (Status ${response.status})`
      );
    }

    const data = await response.json();
    const dataResults = data.results as TypeResultsSeries[];

    return dataResults;
  } catch (error) {
    console.error('Erro ao obter séries em destaque da semana:', error);
    return null; 
  }
}
