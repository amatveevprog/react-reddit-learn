import React from 'react';
import styles from './card.css';
import { ICardComponentProps, ICardMenuControlsConfig, ICardPreviewProps, IControlsProps } from '../../../types/CardList/Card';
import { Content } from './Content';
import { Preview } from './Preview';
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
      imgSrc: 'https://lh3.googleusercontent.com/a/ALm5wu0hNsKkMaHlX43ZWYWXNr5_WEl3mbi-fEvj3MyJyw=s192-c-rg-br100',
      userUrl: 'http://www.google.com'
    },
    published: {
      timeStr: '4 часа назад'
    }
  }
  const cardPreviewContent: ICardPreviewProps = {
    src: 'https://cdn.dribbble.com/userupload/2748402/file/original-c45c9cbd53d6d24e58a4ef82f14c1fcd.jpg?compress=1&resize=1504x1128'
  }
  const cardMenuProps: ICardMenuControlsConfig = {
    controls: [
      "MENU_ITEM_COMMENTS",
      "MENU_ITEM_SHARE",
      "MENU_ITEM_HIDE",
      "MENU_ITEM_SAVE",
      "MENU_ITEM_COMPLAIN"
    ]
  };
  const controlsProps:IControlsProps = {
    karmaValue: 234,
    commentsValue:14,
    actions:{
      saveButton:true,
      shareButton:true
    }
  }
  return (
    <li className={styles.card}>
      <Content {...cardPostContent} />
      <Preview {...cardPreviewContent} />
      <Menu {...cardMenuProps} />

      <Controls {...controlsProps}/>
      
    </li >
  );
}
