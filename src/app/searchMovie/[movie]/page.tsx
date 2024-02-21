import React from "react";
import { useParams } from "next/navigation";
import { api } from "@/api";
import { Header } from "@/components/header";

const getSearchMovie = async (movie: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=pt-Br&page=1`,
    {
      method: "GET",
      headers: api.headers,
    },
  );
  const data = await response.json();

  console.log(data.results[1].title);
  return data.results;
};

export default async function SearchPage({ params }: { params: { movie: string } }) {
  const searchMovie = await getSearchMovie(params.movie);

  return ( 
    <div>
      <Header />
      <main className="p-16 ">
        <h1 className="text-3xl font-bold">Resultados para: {params.movie}</h1>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:justify-center items-center">
          {searchMovie.map((item: any) => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                width={300}
                height={300}
                className="mt-6 border- rounded-xl hover:scale-105 transition duration-300 ease-in-out"
              />
              <p className="font-bold text-base mt-3">{item.title}</p>
            </li>
          ))}
        </ul>
      </main>  
    </div>
  )
}
