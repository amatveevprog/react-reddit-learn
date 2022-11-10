import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThereadTitle } from './ThereadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThereadTitle />
      <SortBlock />
    </header>
  );
}
