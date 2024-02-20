import React from "react";
import { useParams } from "next/navigation";
import { api } from "@/api";

const getSearchMovie = async (movie: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=pt-Br&page=1`,
    {
      method: "GET",
      headers: api.headers,
    },
  );
  const data = await response.json();

  console.log(data);
  return data;
};

export default function SearchPage({ params }: { params: { movie: string } }) {
  const searchMovie = getSearchMovie(params.movie);

  return <div>{/* <h1>SearchPage {searchMovie.results[0].title}</h1> */}</div>;
}
