import { TypeGenre } from './genre';

export interface TypeCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface TypeProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TypeProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TypeSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export export interface TypeDetailsMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | TypeCollection;
  budget: number;
  genres: TypeGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
