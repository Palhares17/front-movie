import getDetailsMovie from '@/api/routes/getDetailsMovie';
import Image from 'next/image';
import styles from './styles.module.css';

interface TypeParams {
  params: {
    id: number;
  };
}

export default async function MovieIdPage({ params }: TypeParams) {
  const details = await getDetailsMovie(params.id);

  const date = details.release_date;
  const year = date.substring(0, 4);

  const minutes = details.runtime;
  const hours = minutes / 60;
  const hoursComplete = Math.floor(hours);
  const minutesComplete = Math.round((hours - hoursComplete) * 60);

  return (
    <main className={`container margin-64`}>
      <section className={`${styles.flex}`}>
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
        </div>

				<div>	
					<span></span>
				</div>
      </section>
    </main>
  );
}
