import React from 'react';
import { ICardPreviewProps } from '../../../types/CardList/Card';
import styles from './preview.css';

export function Preview(props: ICardPreviewProps) {
  return (
    <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src={props.src}
        />
      </div>
  );
}
