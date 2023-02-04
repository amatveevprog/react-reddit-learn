import React from 'react';
import { ICardMenuControlsConfig } from '../../../../types/CardList/Card';
import { GenericList, IGenericListProps, IItem } from '../../../../utils/GenericList';
import { generateId } from '../../../../utils/js/generateRandomIndex';
import { Dropdown } from '../../Dropdown';
import styles from './menu.css';
import styles2 from './MenuItem/menuitem.css'
import { MenuItem } from './MenuItem';

import { pipe } from 'ramda';
import { MenuIcon } from '../../../icons';


export interface IMenuItem {
  text: string;
  id?: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  children?: React.ReactNode;
  index?: number;
  menuLength?: number;
};

export interface IMenuListProps {
  list: IMenuItem[];
  containerClass?: string;
}
/* function fillArrayWithProp<>(element: IMenuItem){
  return ()=>{}
} */

function fillWithIds(list: IMenuItem[]): IItem[] {
  return list.map((elt) => (elt.id ? elt : generateId(elt))) as IItem[];
}
function fillWithClassNames(list: IItem[]) {
  return list.map((elt) => ({ ...elt, className: styles2[elt.className as string] }))
}
function addCloseELement(list: IItem[]): IItem[] {
  return list.concat(generateId({
    text: "Закрыть",
    className: styles2.menuItemClose,
    As: 'button' as const,
    onClick: () => {
      console.log('close event handler');
    }
  }));
}

function fillWithChildren(list: IItem[]) {
  return list.map((element, index, array) => ({
    ...element,
    children: React.createElement(MenuItem, { ...element, index, menuLength: array.length })
  }));
}

const menuPipe = pipe(fillWithIds, fillWithClassNames, fillWithChildren, addCloseELement);

export function Menu(props: any) {
  return (

    <div className={styles.menu} >
      <Dropdown
        button={<button className={styles.menuButton}>
          <MenuIcon/>
        </button>}
      >
        <div className={props?.styleOfMenuContainer}>
          <ul className={styles.menuUl}>
            <GenericList list={menuPipe(props.items)} />
          </ul>
        </div>
      </Dropdown>
    </div>
  );
}
