import Image from 'next/image';
import styles from './styles.module.css';
import SaveButton from '@/components/functional/save';
import Slider from '@/components/functional/Slider';
import CardsCasting from '@/components/functional/cardsCasting';
import Section from '@/components/ui/section';
import getDetailsSeries from '@/api/actions/series/getDetailsSeries';
import getWatchProviderSeries from '@/api/actions/series/getWatchProviders';
import getCastingSeries, {
  CastMemberSeries,
} from '@/api/actions/series/getCastingSeries';
import Trailer from '@/components/ui/trailer';
import getTrailerSeries from '@/api/actions/series/getTrailerSeries';
import { Suspense } from 'react';
import Galery from '@/components/ui/galery';
import getGalerySeries from '@/api/actions/series/getGalerySeries';

interface TypeParams {
  params: {
    id: number;
  };
}

export default async function SeriesIdPage({ params }: TypeParams) {
  const [details, providers, credit, trailer, galery] = await Promise.all([
    getDetailsSeries(params.id),
    getWatchProviderSeries(params.id),
    getCastingSeries(params.id),
    getTrailerSeries(params.id),
    getGalerySeries(params.id),
  ]);

  return (
    <main className={`margin-64`}>
      <section className={`${styles.containerMovie}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={`poster ${details.name}`}
          width={300}
          height={480}
          className={styles.image}
        />
        <div>
          <h1 className={`h3-32`}>{details.name}</h1>
          <div className={`${styles.containerInfo} margin-8`}>
            <p className={styles.info}>
              Temporadas: {details.number_of_seasons}
            </p>
            <span className={styles.divider}></span>
            <p className={styles.info}>
              Episódios: {details.number_of_episodes}
            </p>
          </div>

          <div className={`margin-32 ${styles.containerGenre}`}>
            {details.genres.map((item) => (
              <span key={item.id} className={styles.genre}>
                {item.name}
              </span>
            ))}
          </div>

          <p className={`margin-32 p-16 ${styles.overview}`}>
            {details.overview}
          </p>
          <SaveButton />
        </div>
      </section>

      <Section text="Aonde assistir">
        <div className={`${styles.providers} margin-32 container`}>
          {providers ? (
            providers?.map((provider) => (
              <Image
                src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                alt={`logo ${provider.provider_name}`}
                width={64}
                height={64}
                key={provider.provider_id}
                className={styles.provider}
              />
            ))
          ) : (
            <p className={`p-16`}>Não possuí distribuição no Brasil</p>
          )}
        </div>
      </Section>

      {details.created_by.length > 0 && (
        <Section text="Criado Por:">
          <ul className={`container ${styles.creators}`}>
            {details.created_by.map((item) => (
              <li key={item.id}>
                <CardsCasting
                  title={item.name}
                  image={item.profile_path}
                  id={item.id}
                  media_type="person"
                />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section text="Elenco">
        <Slider>
          {credit.map((item: CastMemberSeries) => {
            return (
              <CardsCasting
                title={item.name}
                image={item.profile_path}
                key={item.id}
                id={item.id}
                character={item.character}
              />
            );
          })}
        </Slider>
      </Section>

      {trailer[0] && (
        <Section text="Treiler">
          <Trailer videoKey={trailer[0].key} />
        </Section>
      )}

      <Section text="Galeria">
        <Galery>
          {galery.backdrops.map((item) => (
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
              alt={`backdrop ${item.file_path}`}
              width={200}
              height={200}
              key={item.file_path}
              className={styles.image}
            />
          ))}
        </Galery>
      </Section>
    </main>
  );
}
