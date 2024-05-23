import { optionsReload } from '../../@constants/optionsReload';

export default async function getTheatres() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&region=br',
      optionsReload
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter os filmes em exibição nos cinemas (Status ${response.status})`
      );
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Erro ao obter os filmes em exibição nos cinemas:', error);
    return null;
  }
}
