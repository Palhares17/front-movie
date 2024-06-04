'use server';

import { options } from '../../@constants/options';
import { TypeBackdropData } from '../../types/galery';

export default async function getGalery(
  movie_id: number
): Promise<TypeBackdropData | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/images`,
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch gallery: ${response.statusText}`);
    }

    const data = (await response.json()) as TypeBackdropData;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
