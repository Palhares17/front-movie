import { options } from '../../constants/optionsReload';
import { TypeBackdropData } from '../../types/galery';

export default async function getGalerySeries(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${movie_id}/images?language=en`,
    options
  );
  const data = (await response.json()) as TypeBackdropData;

  return data;
}
