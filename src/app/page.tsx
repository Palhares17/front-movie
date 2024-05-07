import Cards from '@/components/functional/cards';
import Slider from '@/components/functional/Slider';
import { TypeResultMovies } from '@/api/types/movies';
import { TypeResultsSeries } from '@/api/types/series';
import Section from '@/components/ui/section';
import getTrading from '@/api/routes/getTrading';
import { TypeResultTrading } from '@/api/types/trading';
import Banner from '@/components/ui/banner';
import getMoviesWeek from '@/api/routes/movie/getMoviesWeek';
import getSeriesWeek from '@/api/routes/series/getSeriesWeek';

export default async function Home() {
  const [tranding, moviesWeek, seriesWeek] = await Promise.all([
    getTrading(),
    getMoviesWeek(),
    getSeriesWeek(),
  ]);

  return (
    <main>
      <Banner props={moviesWeek} />

      <Section text="Tendências">
        <Slider>
          {tranding.map((item: TypeResultTrading) => {
            return (
              <Cards
                title={item.title ? item.title : item.name}
                image={item.poster_path}
                key={item.id}
                id={item.id}
                media_type={item.media_type}
              />
            );
          })}
        </Slider>
      </Section>

      <Section text="Filmes da semana">
        <Slider>
          {moviesWeek.map((item: TypeResultMovies) => {
            return (
              <Cards
                title={item.title}
                image={item.poster_path}
                key={item.id}
                id={item.id}
                media_type={item.media_type}
              />
            );
          })}
        </Slider>
      </Section>

      <Section text="Séries da semana">
        <Slider>
          {seriesWeek.map((item: TypeResultsSeries) => {
            return (
              <Cards
                title={item.name}
                image={item.poster_path}
                key={item.id}
                id={item.id}
                media_type={item.media_type}
              />
            );
          })}
        </Slider>
      </Section>
    </main>
  );
}
