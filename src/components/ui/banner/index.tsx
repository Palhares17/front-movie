'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { TypeResultMovies } from '@/api/types/movies';
import ButtonDetails from '@/components/functional/button';
import React from 'react';

export default function Banner(movies: any) {
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    if (index === movies.props.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movies.props[index].backdrop_path}`}
        width={1956}
        height={897}
        alt="banner"
        className={`${styles.image}`}
      />

      <div className={`${styles.titleFilm} ${styles.position}`}>
        <h1 className="h1-48">{movies.props[index].title}</h1>
        <p className={`${styles.width} p-16`}>{movies.props[index].overview}</p>

        <ButtonDetails text="ver detalhes" />
        <button onClick={handleNext}>Próximo</button>
      </div>
    </section>
  );
}
