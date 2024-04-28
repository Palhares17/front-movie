import GenreCheckout from '@/components/functional/genreCheckout';
import styles from './styles.module.css';
import getGenres from '@/api/routes/getGenres';
import SectionHome from '@/components/ui/sectionHome';
import Slider from '@/components/functional/Slider';
import getTheatres from '@/api/routes/getTheatres';
import Cards from '@/components/functional/cards';
import getMovies from '@/api/routes/getMovies';
import { TypeResultMovies } from '@/api/types/movies';

export default async function MoviesPage() {
  const genres = await getGenres();
  const theatres = await getTheatres();
  const movies = await getMovies();

  return (
    <main>
      <ul className={`${styles.containerGenres} container margin-32`}>
        {genres.map((item) => (
          <li key={item.id}>
            <GenreCheckout name={item.name} />
          </li>
        ))}
      </ul>

      <SectionHome text="Nos cinemas">
        <Slider>
          {theatres.map((item: TypeTheatresResults) => {
            return (
              <Cards
                title={item.title}
                image={item.poster_path}
                key={item.id}
              />
            );
          })}
        </Slider>
      </SectionHome>

      <section className={`container`}>
        <h3 className={`h3-32 margin-64`}>Todos os filmes</h3>
        <div className={styles.grid}>
          {movies.map((item: TypeResultMovies) => (
            <Cards title={item.title} image={item.poster_path} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
