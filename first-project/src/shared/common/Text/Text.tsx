import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

/**
 * Объединение множества стилей через универсальные компоненты
 */

/*
*    font-size: 28px;
*    line-height: 33px;
*
*    font-size: 20px;
*    line-height: 23px;
*
*    font-size: 16px;
*    line-height: 19px;
*
*    font-size: 14px;
*    line-height: 16px;
*
*    font-size: 12px;
*    line-height: 14px;
*
*    font-size: 10px;
*    line-height: 12px;
*
*  span, h1234, div, ...
*/

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  greyEC = 'greyEC',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}; // в реальном проекте лучше вынести в файл с глобальными enum-ами и константами.

interface ItextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

// при новом параметре объявляем соответствующий класс со значением в css, делаем его в пропсах и интерфейсах, затем делаем соответствующий аргумент в classNames
// пример с bold

export function Text(props: ItextProps) {
  const {
    As = 'span',
    color = EColor.black,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    bold,
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    {
      [styles[`m${mobileSize}`]]: mobileSize, // эта строка вообще не выполнится, если не указан mobileSize
      [styles[`t${tabletSize}`]]: tabletSize, // аналогично, не выполнится, если не указан tabletSize
      [styles[`d${desktopSize}`]]: desktopSize, // аналогично, при desktopSize
    },
    styles[color],
    {[styles.bold]: bold},
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
