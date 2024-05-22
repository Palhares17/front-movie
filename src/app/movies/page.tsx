import GenreCheckout from '@/components/functional/genreCheckout';
import styles from './styles.module.css';
import getGenres from '@/api/actions/getGenres';
import Section from '@/components/ui/section';
import Slider from '@/components/functional/Slider';
import getTheatres from '@/api/actions/movie/getTheatres';
import Cards from '@/components/functional/cards';
import RenderMovies from '@/components/functional/renderMovies';

export default async function MoviesPage() {
  const [genres, theatres] = await Promise.all([getGenres(), getTheatres()]);

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

      <RenderMovies />
    </main>
  );
}
