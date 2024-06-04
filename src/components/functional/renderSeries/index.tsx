'use client';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import getSeries from '@/api/actions/series/getSeries';
import React from 'react';
import Cards from '../cards';
import { TypeResultsSeries } from '@/api/types/series';

export default function RenderSeries() {
  const [series, setSeries] = useState<TypeResultsSeries[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const seriesData = await getSeries(page);
      if (seriesData) {
        setSeries((prevSeries) => [...prevSeries, ...seriesData]);
      }
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
        {series.map((item) => (
          <Cards
            title={item.name}
            image={item.poster_path}
            key={item.id}
            id={item.id}
            media_type="tv"
          />
        ))}
        {isLoading && <p>Carregando...</p>}
      </div>
    </section>
  );
}
