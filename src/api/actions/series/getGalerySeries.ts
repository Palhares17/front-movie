import { options } from '../../@constants/options';
import { TypeBackdropData } from '../../types/galery';

export default async function getGalerySeries(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}/images?language=en`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao obter a galeria da série (Status ${response.status})`
      );
    }

    const data = await response.json();
    return data as TypeBackdropData;
  } catch (error) {
    console.error('Erro ao obter a galeria da série:', error);
    return null;
  }
}
