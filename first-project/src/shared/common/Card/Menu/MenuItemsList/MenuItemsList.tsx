import React from 'react';
import { BlockIcon, WarningIcon, CommentIcon, SaveIcon, ShareIcon } from '../../../../icons';
import { EColor } from '../../../Text';
import styles from './menuitemslist.css';
import { Text } from '../../../Text';
import classNames from 'classnames';

interface IMenuItemsListProps{
  postId?: string;
}
export function MenuItemsList(props: IMenuItemsListProps) {
  const { postId } = props;
  return (
    <ul className={styles.menuItemsList}>
      <li className={classNames(styles.menuItem,{})}>
      <CommentIcon/>
      <Text size={12} color={EColor.grey99}>Комментарии</Text>
      </li>

      <div className={styles.divider}/>

      <li className={classNames(styles.menuItem,{})}>
      <ShareIcon/>
      <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider}/>

      <li className={classNames(styles.menuItem,{})}>
        <BlockIcon/>
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={classNames(styles.menuItem,{})}>
        <SaveIcon/>
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem}>
        <WarningIcon/>
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
