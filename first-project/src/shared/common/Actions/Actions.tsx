import React from 'react';
import styles from './actions.css';

interface IActionInputProps {
  children?: React.ReactNode;
}
export function Actions({ children }: IActionInputProps) {
  return (
    <div className={styles.actions}>
      {children}
    </div>
  );
}
