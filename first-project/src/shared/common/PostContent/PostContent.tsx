import React from 'react';
import { IPostProps } from '../../../types/CardList/Card';
import styles from './postcontent.css';

export function PostContent(props: IPostProps) {
  return (
    <h2 className={styles.title}>
      <a href={props.postLink || "#"} className={styles.postLink}>
      {props.content}
      </a>
    </h2>
  );
}
