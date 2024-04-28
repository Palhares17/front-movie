'use client';

import React from 'react';
import styles from './styles.module.css';

export default function GenreCheckout({ name }: { name: string }) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`${styles.tag} ${isChecked ? styles.checked : ''}`}>
      <input
        className={styles.checkboxWrapper}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={styles.text}>{name}</p>
    </label>
  );
}
