'use client';

import { TypeResultMovies } from '@/api/types/movies';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import getMovies from '@/api/actions/movie/getMovies';
import React from 'react';
import Cards from '../cards';

export default function RenderMovies() {
  const [movies, setMovies] = useState<TypeResultMovies[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const moviesData = await getMovies(page);
      setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      setIsLoading(false);
    }

    fetchData();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 500 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <section className={`container`}>
      <h3 className={`h3-32 margin-64`}>Todos os filmes</h3>
      <div className={styles.grid}>
        {movies.map((item) => (
          <Cards
            title={item.title}
            image={item.poster_path}
            key={item.id}
            id={item.id}
          />
        ))}
        {isLoading && <p>Carregando...</p>}
      </div>
    </section>
  );
}
