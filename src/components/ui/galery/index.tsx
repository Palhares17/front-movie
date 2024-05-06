import React from 'react';
import styles from './styles.module.css';

interface TypeGalery {
  children: React.ReactNode;
}

export default function Galery({ children }: TypeGalery) {
  return <div className={`${styles.flex} container`}>{children}</div>;
}
