import Cards from '@/components/functional/cards';
import Slider from '@/components/functional/Slider';
import { TypeResultMovies } from '@/api/types/movies';
import { TypeResultsSeries } from '@/api/types/series';
import SectionHome from '@/components/ui/sectionHome';
import getTrading from '@/api/routes/getTrading';
import { TypeResultTrading } from '@/api/types/trading';
import Banner from '@/components/ui/banner';
import getMoviesWeek from '@/api/routes/getMoviesWeek';
import getSeriesWeek from '@/api/routes/getSeriesWeek';

export default async function Home() {
  const tranding = await getTrading();
  const moviesWeek = await getMoviesWeek();
  const seriesWeek = await getSeriesWeek();

  return (
    <main>
      <Banner props={moviesWeek} />
			
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

      <SectionHome text="Filmes da semana">
        <Slider>
          {moviesWeek.map((item: TypeResultMovies) => {
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

      <SectionHome text="Séries da Séries">
        <Slider>
          {seriesWeek.map((item: TypeResultsSeries) => {
            return (
              <Cards title={item.name} image={item.poster_path} key={item.id} />
            );
          })}
        </Slider>
      </SectionHome>
    </main>
  );
}
