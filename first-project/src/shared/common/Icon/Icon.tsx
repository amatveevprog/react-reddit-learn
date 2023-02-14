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
const icons = (size?:TSize) => {
  return {
  [EIcons.block]: <BlockIcon size={size}/>,
  [EIcons.comment]: <CommentIcon size={size} />,
  [EIcons.save]: <SaveIcon size={size} />,
  [EIcons.share]: <ShareIcon size={size} />,
  [EIcons.warning]: <WarningIcon size={size} />
}};
type TSize = 12 | 16 | 20 | 24 | 32 | 64 | 128;
interface IIconProps {
  name: string;
  size?: TSize;
  className?: string;
}
export function Icon(props: IIconProps) {
  const { name, size, className } = props;
  return <div className={`icon-container ${className}`}>{icons(size)[name as keyof typeof EIcons]}</div>
}
