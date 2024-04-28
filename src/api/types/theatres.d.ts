interface TypeDateRange {
  maximum: string;
  minimum: string;
}

interface TypeTheatresResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TypeTheatres {
  dates: DateRange;
  page: number;
  results: Movie[];
}
