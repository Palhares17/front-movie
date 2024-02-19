import { api } from '@/api';
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export async function getMovies() {
  const response = await fetch(api.url, {
    method: 'GET',
    headers: api.headers
  });

  const data = await response.json();

  return data;
}

export const Movies = async () => {
  const movies = await getMovies();

  return (
    <main className="px-16 py-16">
      <h1 className="text-3xl font-bold">Todos os filmes </h1>

      <ul className="grid grid-cols-6 gap-6">
        {
          movies.results.map((item: any) => (
            <li key={item.id}>
              <Link href={`/movies/${item.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mt-6 border- rounded-xl"
                />
                <p className="font-bold text-base mt-3">{item.title}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
