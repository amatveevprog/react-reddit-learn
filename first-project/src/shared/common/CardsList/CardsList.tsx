import React from 'react';
import { Card } from '../Card';
import styles from './cardslist.css';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card key="1"/>
      <Card key="2"/>
      <Card key="3"/>
    </ul>
  );
}
