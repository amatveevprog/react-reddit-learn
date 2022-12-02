import React from 'react';
import styles from './menuitem.css';
import { icons, IIcon } from './icons/';
import { isPropertyInObjectSet } from '../../../../../utils/js/isPropertyInObjectSet';

const iconsSet = new Set(Object.keys(icons));
function getIcon<E extends IIcon>(iconName: string) {
  return (iconsSet.has(iconName) && <img className={styles["menu-item-img"]} src={icons[iconName as E]} />);
}

interface IMenuItemProps {
  children?: React.ReactNode;
  text?: string;
  icon?: string;
  className?: string;
  index?: number; // для того, чтобы в меню отображать горизонтальные линии только между элементами 
  menuLength?: number; // также, см. предыдущее свойство.
  onClick?: (id:string) => void;
}
const isIndexSet = isPropertyInObjectSet('index');
const isLengthSet = isPropertyInObjectSet('menuLength');
const isLastElement = (index: number, length: number) => (index === length - 1);

export function MenuItem(props: IMenuItemProps) {
  const { icon = "", text, children, index, menuLength } = props;
  return (
    <div className={styles['menu-item-container']}>
      <div className={styles['menu-item-content-container']}>
        <div className={styles['menu-item-content']}>
          {getIcon(icon)}
          {children ? children : <div className={styles["menu-item-text"]}>{text}</div>}
        </div>
      </div>
      {isIndexSet(props) && isLengthSet(props) && !isLastElement(index as number, menuLength as number) &&
        <div className={styles['menu-item-horizontal-container']}>
          <div className={styles['menu-item-horizontal-line']} />
        </div>}
    </div>
  );
}
