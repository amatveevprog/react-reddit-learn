import React from 'react';
import { IPublishProps } from '../../../../../types/CardList/Card';
import styles from './publishlabel.css';

export function PublishLabel(props: IPublishProps) {
  return (
    <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>
            {props.timeStr}
          </span>
  );
}
