'use server';

import { options } from '@/api/@constants/options';

export default async function getDetailsSeries(id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`,
      options
    );

    if (!response.ok) {
      throw new Error(`Erro ao obter detalhes da série (Status ${response.status})`);
    }

    const data = await response.json();
    return data as TypeTVShow;
  } catch (error) {
    console.error('Erro ao obter detalhes da série:', error);
    return null;
  }
}

