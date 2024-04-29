import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import React from 'react';

interface TypeCard {
  title: string;
  image: string;
  media_type?: string;
  id: number;
}

export default function Cards({ title, image, media_type, id }: TypeCard) {
  let route;
  if (media_type === 'tv') {
    route = `series/${id}`;
  } else {
    route = `movies/${id}`;
  }

  return (
    <div className={`margin-32 ${styles.card}`}>
      {image && (
        <Link href={route}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={`poster ${title}`}
            width={300}
            height={480}
            className={`${styles.image} ${styles.hover}`}
          />
          <h4 className={styles.nameFilm}>{title}</h4>
        </Link>
      )}
    </div>
  );
}
