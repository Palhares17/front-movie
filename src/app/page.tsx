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
import Banner from '@/components/ui/banner';

export default async function Home() {
  const tranding = await getTrading();
  const movies = await getMovies();
  const series = await getSeries();

  return (
    <main>
      <Banner props={movies} />
			
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
