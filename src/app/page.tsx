import ButtonDetails from '@/components/functional/button';
import Image from 'next/image';
import styles from './home.module.css';
import Cards from '@/components/functional/cards';
import Slider from '@/components/functional/Slider';
import { TypeResultMovies } from '@/api/types/movies';
import { TypeResultsSeries } from '@/api/types/series';
import SectionHome from '@/components/ui/sectionHome';
import getTrading from '@/api/routes/getTrading';
import getMovies from '@/api/routes/getMovies';
import getSeries from '@/api/routes/getSeries';
import { TypeResultTrading } from '@/api/types/trading';

export default async function Home() {
  const tranding = await getTrading();
  const movies = await getMovies();
  const series = await getSeries();

  return (
    <main>
      <section>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movies[4].backdrop_path}`}
          width={1956}
          height={897}
          alt="banner"
          className={`${styles.image}`}
        />

        <div className={`${styles.titleFilm} ${styles.position}`}>
          <h1 className="h1-48">{movies[4].title}</h1>
          <p className={`${styles.width} p-16`}>{movies[4].overview}</p>

          <ButtonDetails text="ver detalhes" />
        </div>
      </section>

      <SectionHome text="Tendências">	
        <Slider>
          {tranding.map((item: TypeResultTrading) => {
            return (
              <Cards
                title={item.title ? item.title : item.name}
                image={item.poster_path}
                key={item.id}
              />
            );
          })}
        </Slider>
      </SectionHome>

      <SectionHome text="Filmes">
        <Slider>
          {movies.map((item: TypeResultMovies) => {
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

      <SectionHome text="Séries">
        <Slider>
          {series.map((item: TypeResultsSeries) => {
            return (
              <Cards title={item.name} image={item.poster_path} key={item.id} />
            );
          })}
        </Slider>
      </SectionHome>
    </main>
  );
}
