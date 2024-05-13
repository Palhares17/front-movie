import { options } from '../../constants/options';
import { TypeBackdropData } from '../../types/galery';

export default async function getGalery(movie_id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/images`,
    options
  );
  const data = (await response.json()) as TypeBackdropData;

  return data;
}
