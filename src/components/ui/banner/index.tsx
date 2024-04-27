'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import { TypeResultMovies } from '@/api/types/movies';
import ButtonDetails from '@/components/functional/button';
import React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
// import SaveButton from '@/components/functional/save';

export default function Banner(movies: any) {
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    if (index === movies.props.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index === movies.props.length - 1) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movies.props[index].backdrop_path}`}
        width={1956}
        height={897}
        alt="banner"
        sizes="190vw"
        quality={80}
        priority
        className={`${styles.image}`}
      />
      <div className={`${styles.titleFilm} ${styles.position} container`}>
        <h1 className={`${styles.width} h1-48`}>{movies.props[index].title}</h1>
        <p className={`${styles.width} p-16`}>{movies.props[index].overview}</p>

        <div className={styles.buttonContent}>
          <div>
            <ButtonDetails text="ver detalhes" />
						{/* <SaveButton /> */}
          </div>
          <div className={styles.controller}>
            <button className={styles.buttonPrev} onClick={handlePrev}>
              <CaretLeft size={24} color="#ffffff" />
            </button>
            <button className={styles.buttonNext} onClick={handleNext}>
              <CaretRight size={24} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
