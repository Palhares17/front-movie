import Image from 'next/image';
import styles from './styles.module.css';

interface TypeCard {
  title: string;
  image: string;
}

export default function Cards({ title, image }: TypeCard) {
  return (
    <div className={`margin-32 ${styles.card}`}>
      {image && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={`poster ${title}`}
            width={300}
            height={480}
            className={`${styles.image} ${styles.hover}`}
          />
          <h4 className={styles.nameFilm}>{title}</h4>
        </>
      )}
    </div>
  );
}
