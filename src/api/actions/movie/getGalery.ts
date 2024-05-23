import { options } from '../../@constants/options';
import { TypeBackdropData } from '../../types/galery';

export default async function getGalery(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter a galeria de imagens do filme (Status ${response.status})`
      );
    }

    const data = (await response.json()) as TypeBackdropData;

    return data;
  } catch (error) {
    console.error('Erro ao obter a galeria de imagens do filme:', error);
    return null;
  }
}
