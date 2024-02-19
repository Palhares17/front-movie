"use client";
// Permite que não seja tudo renderizado no servidor, fazendo com que o dados que vem do browser possam ser renderizados posteriormente

import { api } from '@/api';
import { Header } from '@/components/header';


import { useParams } from 'next/navigation'
import React from 'react'

const getMoviesID = async (id: Number) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, {
    method: 'GET',
    headers: api.headers
  });
  const data = await response.json();

  return data;
};

export default async function produto() {
  const params = useParams(); // Hook para pegar os parametros da URL
  const id = parseInt(Array.isArray(params.id) ? params.id[0] : params.id);

  const datailsMovies = await getMoviesID(id);

  return (
    <>
      <Header />
      <main className="p-16 ">
        <div className='md:flex flex-col items-center'>
          <section className='md:flex md:w-3/4 md:gap-16'>
            <img
              src={`https://image.tmdb.org/t/p/original${datailsMovies.poster_path}`}
              alt={datailsMovies.title}
              width={300}
              height={300}
              className="border- rounded-xl mb-7"
            />
            <div>
              <h2 className="font-bold text-3xl mb-4">{datailsMovies.title}</h2>
              <p className=''>{datailsMovies.overview}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
