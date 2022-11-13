import React from 'react';
import { IUserProps } from '../../../types/CardList/Card';
import styles from './user.css';

export function User(props: IUserProps) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={props.imgSrc || undefined}
        alt="avatar" />
      <a href={props.userUrl || "#user-url"} className={styles.userName}>{props.name}</a>
    </div>
  );
}
