import React from 'react';
import { IControlsProps } from '../../../../types/CardList/Card';
import { Actions } from '../../Actions';
import { Save } from '../../Buttons/Save';
import { Share } from '../../Buttons/Share';
import { Comments } from '../../Comments';
import { KarmaCounter } from '../../KarmaCounter';
import styles from './controls.css';

export function Controls(props: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karmaValue={props.karmaValue} />
      <Comments commentsValue={props.commentsValue} />
      <Actions>
        <Save/>
        <Share/>
      </Actions>
    </div>
  );
}
