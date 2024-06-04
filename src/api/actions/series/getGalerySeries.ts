'use server';

import { options } from '../../@constants/options';
// import { TypeBackdrop, TypeBackdropData } from '../../types/galery';

export interface TypeBackdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TypeBackdropData {
  backdrops: TypeBackdrop[];
}

export default async function getGalerySeries(
  movie_id: number
): Promise<TypeBackdrop[] | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movie_id}/images?language=en`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch TV series gallery: ${response.statusText}`
      );
    }

    const data = (await response.json()) as TypeBackdropData;
		const results = data.backdrops;
		
    return results;
  } catch (error) {
    console.error('Error fetching TV series gallery:', error);
    return null;
  }
}
