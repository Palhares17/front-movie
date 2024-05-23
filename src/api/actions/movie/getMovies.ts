'use server';

import { optionsReload } from '../../@constants/optionsReload';
import { TypeResultMovies } from '../../types/movies';

export default async function getMovies(page: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`,
      optionsReload
    );

    if (!response.ok) {
      throw new Error(`Erro ao obter filmes (Status ${response.status})`);
    }

    const data = await response.json();
    const dataResults = data.results as TypeResultMovies[];
    return dataResults;
  } catch (error) {
    console.error('Erro ao obter filmes:', error);
    return null;
  }
}
