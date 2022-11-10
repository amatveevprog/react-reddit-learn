import React from 'react';
import { IControlsProps } from '../../../../types/CardList/Card';
import { Actions } from './Actions';
import { Comments } from './Comments';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

export function Controls(props: IControlsProps) {
  const { actions, actionsProps } = props;
  //const actionProps = { actions,actionsProps };
  return (
    <div className={styles.controls}>
      <KarmaCounter karmaValue={props.karmaValue} />
      <Comments commentsValue={props.commentsValue} />
      <Actions {...{ actions, actionsProps }} />
    </div>
  );
}
