export interface IIdentCard {
  imgSrc: string;
  author: {
    name: string;
  };
}
export interface ICreatedAt {
  publishedLabel: string | "опубликовано"; // строка "опубликовано"
  when: string;
}
export interface IKarmaValue{
  karmaValue?: number;
};
export interface ICommentsValue{
  commentsValue?: number;
}

/**
 * определяет набор настроек, которые будут присутствовать в карточке
 */
type ControlsItem =
  | "KARMA_COUNTER"
  | "COMMENTS_BLOCK"
  | "SAVE_BUTTON"
  | "SHARE_BUTTON";

type MenuItem =
  | "MENU_ITEM_COMMENTS"
  | "MENU_ITEM_SHARE"
  | "MENU_ITEM_HIDE"
  | "MENU_ITEM_SAVE"
  | "MENU_ITEM_COMPLAIN";
export interface ICardControlsConfig {
  controls: Array<ControlsItem>;
}
export interface ICardMenuControlsConfig {
  controls: Array<MenuItem>;
}
export interface IUserProps {
  name: string;
  imgSrc?: string;
  userUrl?: string;
}
export interface IPublishProps {
  timeStr: string;
}
export interface IPostProps {
  content: string;
  postLink: string;
}
export interface ICardComponentProps {
  post: IPostProps;
  user: IUserProps;
  published: IPublishProps;
}
export interface ICardPreviewProps{
  src: string;
}
export interface ICardControlsCommentProps{
  commentsValue: number
}
export interface IActions{
  share?: object;
  save?: object;
}
export interface IActionsProps{
  saveButton?: boolean;
  shareButton?: boolean;
}
export interface IControlsProps{
  // config: ICardControlsConfig;
  karmaValue?: number;
  commentsValue?: number; 
}

