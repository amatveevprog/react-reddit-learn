import React from 'react';
import { IControlsProps } from '../../../../../types/CardList/Card';
import styles from './actions.css';
import { Save } from './Save';
import { Share } from './Share';
const ShareAction = (props: IControlsProps) => {
  if(props.actions && props.actions.shareButton){
    return (
      <Share {...props.actionsProps?.share}/>
    );
  }
  return null;
}
const SaveAction = (props: IControlsProps) => {
  return (
    props.actions?.saveButton ? 
    <Save {...props.actionsProps?.save}/> : null)
}
export function Actions(props: IControlsProps) {
  return (
    <div className={styles.actions}>
      {ShareAction(props)}
      {SaveAction(props)}
    </div>
  );
}
