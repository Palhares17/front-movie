import { Header } from "@/components/header"
import Image from "next/image";
import { useState } from "react";

export async function getMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWMyODQ3ZTA5NjE1YjIwNjkxMzk5MjdkMWFlMzcwMSIsInN1YiI6IjY1ZDJiNDYzNGJjMzhiMDE4OTU0OTVmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vj77mD6dt7PXUfYfzqs4ZFbJr1nlgvwc6IoWCaHmjiw'
    }
  });

  const data = await response.json();

  console.log(data);
  return data;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <>
      <Header />
      <main className="px-16 py-16">
        <h1 className="text-3xl font-bold">Todos os filmes </h1>

        <ul className="grid grid-cols-6 gap-6">
          {
            movies.results.map((item: any) => (
              <li key={item.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mt-6 border- rounded-xl"
                />
                <p className="font-bold text-base mt-3">{item.title}</p>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}
