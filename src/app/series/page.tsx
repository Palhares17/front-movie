import GenreCheckout from '@/components/functional/genreCheckout';
import styles from './styles.module.css';
import getGenres from '@/api/actions/getGenres';
import RenderSeries from '@/components/functional/renderSeries';

export default async function MoviesPage() {
  const genres = await getGenres();

  return (
    <main>
      <ul className={`${styles.containerGenres} container margin-32`}>
        {genres.map((item) => (
          <li key={item.id}>
            <GenreCheckout name={item.name} />
          </li>
        ))}
      </ul>

      <RenderSeries />
    </main>
  );
}
