import React from 'react';
import styles from './card.css';
import { ICardComponentProps, ICardPreviewProps, IControlsProps } from '../../../types/CardList/Card';
import { Content } from './Content';
import { Preview } from '../Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

export function Card() {
  const cardPostContent: ICardComponentProps = {
    post: {
      content: `Во все большем количестве российских изданий − как печатных, так и онлайновых − появляются объемные материалы особого типа, за которыми в журналистской среде закрепилось название «длинные тексты» (англ. – long forms) или лонгриды (от англ. − long read – материал, предназначенный для длительного прочтения, в отличие от маленькой заметки).

      Сразу же следует оговориться, что объем материала – хотя и наиболее заметная, но не ключевая характеристика лонгрида. Объемными могут быть и материалы других жанров, поэтому сам по себе большой объем текста вовсе не означает, что перед нами лонгрид. Как будет показано в исследовании, лонгриды отличает также особый подход к выбору темы, требования к качеству собранной информации и способ подачи материала.

      В исследовании предпринята попытка описать типологические характеристики лонгридов, разобрать особенности их подготовки, а также выявить распространенность лонгридов в современной российской прессе. Еще одной целью исследования является оценка перспектив этого жанра, о котором можно говорить если не как о сложившемся (в принятых на сегодняшний день в научной среде жанровых классификациях лонгрид отсутствует), то как о складывающемся и проникающем во все большее количество изданий.`,
      postLink: '#post-url'
    },
    user: {
      name: 'Алексей Матвеев',
      imgSrc: 'https://ucarecdn.com/631479df-27a8-4047-ae59-63f9167001f2/-/stretch/off/-/resize/1280x/',
      userUrl: 'http://www.google.com'
    },
    published: {
      timeStr: '4 часа назад'
    }
  }
  const cardPreviewContent: ICardPreviewProps = {
    src: 'https://cdn.dribbble.com/userupload/2748402/file/original-c45c9cbd53d6d24e58a4ef82f14c1fcd.jpg?compress=1&resize=1504x1128'
  }
  const MENU_LIST = [
    { text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const,  onClick:(id:string)=>{
      console.log('Комментарии', id);
    }},
    { text: "Поделиться", className: "menu-item-share", icon: "share", As: 'li' as const,  onClick:(id:string)=>{
      console.log('Поделиться', id);
    }},
    { text: "Скрыть", className: "menu-item-hide", icon: 'hide', As: 'li' as const,  onClick:(id:string)=>{
      console.log('Скрыть', id);
    }},
    { text: "Сохранить", className: "menu-item-save", icon: 'save', As: 'button' as const,  onClick:(id:string)=>{
      console.log('Сохранить', id);
    }},
    { text: "Пожаловаться", className: "menu-item-complain", icon: 'complain', As: 'li' as const,  onClick:(id:string)=>{
      console.log('Пожаловаться', id);
    }},
  ];
  const controlsProps: IControlsProps = {
    karmaValue: 234,
    commentsValue: 14
  }
  return (
    <li className={styles.card}>
      <Content {...cardPostContent} />
      <Preview {...cardPreviewContent} />
      <Menu items={MENU_LIST} styleOfMenuContainer={styles.menuContainer} />

      <Controls {...controlsProps} />
    </li >
  );
}
