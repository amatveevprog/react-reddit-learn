import React from 'react';
import styles from './icon.css';
import { BlockIcon, WarningIcon, CommentIcon, SaveIcon, ShareIcon } from '../../icons';
import classNames from 'classnames';

export enum EIcons {
  block = 'block',
  comment = 'comment',
  save = 'save',
  share = 'share',
  warning = 'warning'
}
type TSize = 12 | 16 | 20 | 24 | 32 | 64 | 128;
interface IIconProps {
  name: string;
  size?: TSize;
}
export function Icon(props: IIconProps) {
  const { name, size } = props;
  const iconClassName = classNames(styles[`s${size}`]);
  switch (name) {
    case EIcons.block:
      return (<BlockIcon size={size}/>);
    case EIcons.comment:
      return (<CommentIcon size={size}/>);
     case EIcons.save:
      return (<SaveIcon size={size}/>);
    case EIcons.share:
      return (<ShareIcon size={size}/>);
    case EIcons.warning:
      return (<WarningIcon size={size}/>);  
    default:
      return null;
  }
}
