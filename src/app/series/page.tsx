import GenreCheckout from '@/components/functional/genreCheckout';
import styles from './styles.module.css';
import getGenres from '@/api/actions/getGenres';
import Cards from '@/components/functional/cards';
import getSeries from '@/api/actions/series/getSeries';
import { TypeResultsSeries } from '@/api/types/series';

export default async function MoviesPage() {
  const [genres, series] = await Promise.all([getGenres(), getSeries()]);

  return (
    <main>
      <ul className={`${styles.containerGenres} container margin-32`}>
        {genres.map((item) => (
          <li key={item.id}>
            <GenreCheckout name={item.name} />
          </li>
        ))}
      </ul>

      <section className={`container`}>
        <h3 className={`h3-32 margin-64`}>Todos os filmes</h3>
        <div className={styles.grid}>
          {series.map((item: TypeResultsSeries) => (
            <Cards
              title={item.name}
              image={item.poster_path}
              key={item.id}
              id={item.id}
              media_type="tv"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
