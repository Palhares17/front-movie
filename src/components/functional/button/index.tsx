'use client';

import React from 'react';
import styles from './styles.module.css';

interface TypeButton {
  text: string;
}

export default function ButtonDetails({ text }: TypeButton) {
  const [modal, setModal] = React.useState(false);

  return (
    <button className={styles.button} onClick={() => setModal}>
      <p>{text}</p>
    </button>
  );
}
