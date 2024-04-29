'use client';

import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface TypeButton {
  text: string;
  media_type?: string;
  id: number;
}

export default function ButtonDetails({ text, id, media_type }: TypeButton) {
  let route;
  if (media_type === 'tv') {
    route = `series/${id}`;
  } else {
    route = `movies/${id}`;
  }

  return (
    <Link href={route}>
      <button className={styles.button}>
        <p>{text}</p>
      </button>
    </Link>
  );
}
