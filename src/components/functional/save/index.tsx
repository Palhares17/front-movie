'use client';

import { BookmarkSimple } from '@phosphor-icons/react';
import styles from './styles.module.css';
import React from 'react';

export default function SaveButton() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="checkboxInput" className={styles.bookmark}>
      <input
        type="checkbox"
        id="checkboxInput"
        onChange={handleCheckboxChange}
      />
      <BookmarkSimple size={24}/>
			Salvar na lista
    </label>
  );
}
1;
