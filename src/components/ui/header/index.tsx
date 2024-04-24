'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { MagnifyingGlass, User } from '@phosphor-icons/react';
import React from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} container`}>
      <Link href={'/'}>
        <Image
          src={'/assets/Shfit.svg'}
          alt="logo shfit"
          height={62}
          width={108}
          priority
          className={styles.logo}
        />
      </Link>

      <div className={styles.group}>
        <MagnifyingGlass size={16} className={styles.icon} />
        <input
          placeholder="Pesquisar"
          type="search"
          className={styles.input}
        ></input>
      </div>

      <nav className={styles.flex}>
        <div className={styles.perfil}>
          <User size={24} />
        </div>

        <div className={styles.nav}>
          <div className={isOpen ? styles.active : ''}>
            <div className={styles.buttonNav} onClick={handleOpen}>
              <span className={styles.menu}></span>
              <span className={styles.menu}></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
