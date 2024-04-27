'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export default function Sidebar({ animate }: { animate: boolean }) {
  return (
    <aside
      className={`${styles.container} ${animate ? styles.active : styles.desabled}`}
    >
      <nav className={styles.nav}>
        <li className={styles.li}>
          <Link href="/" className={styles.link}>
            Início
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/movies" className={styles.link}>
            Filmes
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/series" className={styles.link}>
            Séries
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/mylist" className={styles.link}>
            Minha lista
          </Link>
        </li>
      </nav>
    </aside>
  );
}
