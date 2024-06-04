export interface Criador {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path?: string;
}

export interface Genero {
  id: number;
  name: string;
}

export interface UltimoEpisodio {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

export interface ProximaEpisodio {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

export interface Rede {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface CompanhiaProducao {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface PaisProducao {
  iso_3166_1: string;
  name: string;
}

export interface Temporada {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface IdiomaFalado {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TypeTVShow {
  adult: boolean;
  backdrop_path: string;
  created_by: Criador[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genero[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: UltimoEpisodio;
  name: string;
  next_episode_to_air: ProximaEpisodio;
  networks: Rede[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanhiaProducao[];
  production_countries: PaisProducao[];
  seasons: Temporada[];
  spoken_languages: IdiomaFalado[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
