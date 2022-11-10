import React from 'react';
import { ICardComponentProps, IPostProps, IPublishProps, IUserProps } from '../../../../types/CardList/Card';
import styles from './content.css';
import { PostContent } from './PostContent';
import { PublishLabel } from './PublishLabel';
import { User } from './User';

export function Content(props: ICardComponentProps) {
  const userProps:IUserProps = {...props.user};
  const publishProps:IPublishProps = {...props.published};
  const postProps:IPostProps = {...props.post};
  return (
    <div className={styles.textContent} >
        <div className={styles.metaData}>
          
          <User {...userProps}/>
          <PublishLabel {...publishProps}/>
          
        </div>
        <PostContent {...postProps}/>
        
      </div>
  );
}
