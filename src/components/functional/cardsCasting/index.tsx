import Image from 'next/image';
import styles from './styles.module.css';
import React from 'react';

interface TypeCard {
  title: string;
  image?: string;
  media_type?: string;
  id: number;
  character?: string;
}

export default function CardsCasting({
  title,
  image,
  character,
  media_type,
  id,
}: TypeCard) {
  return (
    <div className={`margin-32 ${styles.card}`}>
      {image && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${image}.jpg`}
            alt={`poster ${title}`}
            width={300}
            height={480}
            className={`${styles.image} ${styles.hover}`}
            priority
          />
          <h4 className={styles.nameFilm}>{title}</h4>
          <p className={styles.character}>{character}</p>
        </>
      )}
    </div>
  );
}
