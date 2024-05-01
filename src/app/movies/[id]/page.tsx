import getDetailsMovie from '@/api/routes/getDetailsMovie';
import Image from 'next/image';
import styles from './styles.module.css';
import SaveButton from '@/components/functional/save';
import getProviders from '@/api/routes/getWatchProviders';
import getCredits, { CastMember, TypeCaster } from '@/api/routes/getCredits';
import Slider from '@/components/functional/Slider';
import Cards from '@/components/functional/cards';
import CardsCasting from '@/components/functional/cardsCasting';
import getTrailerMovie from '@/api/routes/getTrailerMovie';
import Trailer from '@/components/ui/trailer';
import Galery from '@/components/ui/galery';
import getGalery from '@/api/routes/getGalery';

interface TypeParams {
  params: {
    id: number;
  };
}

export default async function MovieIdPage({ params }: TypeParams) {
  const details = await getDetailsMovie(params.id);
  const providers = await getProviders(params.id);
  const credit = await getCredits(params.id);
  const trailer = await getTrailerMovie(params.id);
  const galery = await getGalery(params.id);
  console.log();

  const date = details.release_date;
  const year = date.substring(0, 4);

  const minutes = details.runtime;
  const hours = minutes / 60;
  const hoursComplete = Math.floor(hours);
  const minutesComplete = Math.round((hours - hoursComplete) * 60);

  return (
    <main className={`margin-64`}>
      <section className={`${styles.containerMovie}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={`poster ${details.title}`}
          width={300}
          height={480}
          className={styles.image}
        />
        <div>
          <h1 className={`h3-32`}>{details.title}</h1>
          <div className={`${styles.containerInfo} margin-8`}>
            <p className={styles.info}>{year}</p>
            <span className={styles.divider}></span>
            <p className={styles.info}>
              {hoursComplete}h {minutesComplete}min
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

      <section className={`margin-120 container`}>
        <h3 className={`h3-32`}>Aonde assistir</h3>
        <div className={`${styles.providers} margin-32`}>
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
      </section>

      <section className={`margin-64`}>
        <h3 className={`h3-32 container`}>Elenco</h3>

        <Slider>
          {credit.map((item: CastMember) => {
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
      </section>

      {trailer[0] && (
        <section className={`margin-64`}>
          <h3 className={`h3-32 container`}>Treiler</h3>

          <Trailer videoKey={trailer[0].key} />
        </section>
      )}

      <section className={`margin-64 container`}>
        <h3 className={`h3-32`}>Galeria</h3>
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
      </section>
    </main>
  );
}
