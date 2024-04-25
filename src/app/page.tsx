import ButtonDetails from '@/components/functional/button';
import Image from 'next/image';
import styles from './home.module.css';
import Cards from '@/components/functional/cards';
import Slider from '@/components/functional/Slider';
import getTrading from '@/api/actions/getTrading';
import { TypeResultTrading } from '@/api/types/trading';
import getMovies from '@/api/actions/getMovies';
import { TypeResultMovies } from '@/api/types/movies';
import getSeries from '@/api/actions/getSeries';
import { TypeResultsSeries } from '@/api/types/series';

export default async function Home() {
  const tranding = await getTrading();
  const movies = await getMovies();
	const series = await getSeries();

  return (
    <main>
      <section>
        <Image
          src="/assets/superman.png"
          width={1956}
          height={897}
          alt="banner"
          className={`${styles.image}`}
        />

        <div className={`${styles.titleFilm} ${styles.position}`}>
          <h1 className="h1-48">Nome do filme</h1>
          <p className={`${styles.width} p-16`}>
            A jornada de Paul Atreides continua. Ele está determinado a buscar
            vingança contra aqueles que destruíram sua família e seu lar. Com a
            ajuda de Chani e dos Fremen, ele embarca em uma jornada espiritual,
            mística e marcial. Se torna Dib, o líder messiânico dos Fremen,
            enquanto luta para evitar um futuro sombrio que ele testemunhou em
            visões. No entanto, suas ações inadvertidamente desencadeiam uma
            Guerra Santa em seu nome, que se espalha pelo universo conhecido.
            Enquanto enfrenta escolhas difíceis entre o amor por Chani e o
            destino de seu povo, Paul precisa usar suas habilidades e
            conhecimentos para evitar o terrível futuro que previu.
          </p>

          <ButtonDetails text="ver detalhes" />
        </div>
      </section>

      <section className={`margin-64`}>
        <h3 className={`h3-32 container`}>Tendências</h3>
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
      </section>

      <section className={`margin-64`}>
        <h3 className={`h3-32 container`}>Filmes</h3>
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
      </section>

      <section className={`margin-64`}>
        <h3 className={`h3-32 container`}>Séries</h3>
        <Slider>
          {series.map((item: TypeResultsSeries) => {
            return (
              <Cards
                title={item.name}
                image={item.poster_path}
                key={item.id}
              />
            );
          })}
        </Slider>
      </section>
    </main>
  );
}
