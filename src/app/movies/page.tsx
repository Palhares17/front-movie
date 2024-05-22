import GenreCheckout from '@/components/functional/genreCheckout';
import styles from './styles.module.css';
import getGenres from '@/api/actions/getGenres';
import Section from '@/components/ui/section';
import Slider from '@/components/functional/Slider';
import getTheatres from '@/api/actions/movie/getTheatres';
import Cards from '@/components/functional/cards';
import getMovies from '@/api/actions/movie/getMovies';
import { TypeResultMovies } from '@/api/types/movies';
import { Suspense } from 'react';

import React from 'react';

function RenderMovies() {
  return (
		<h1>Meus filmes</h1>
  );
}

export default async function MoviesPage() {
  const [genres, theatres, movies] = await Promise.all([
    getGenres(),
    getTheatres(),
    getMovies(),
  ]);

  return (
    <main>
      <ul className={`${styles.containerGenres} container margin-32`}>
        {genres.map((item) => (
          <li key={item.id}>
            <GenreCheckout name={item.name} />
          </li>
        ))}
      </ul>

      <Section text="Nos cinemas">
        <Slider>
          {theatres.map((item: TypeTheatresResults) => {
            return (
              <Cards
                title={item.title}
                image={item.poster_path}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </Slider>
      </Section>
    </main>
  );
}
