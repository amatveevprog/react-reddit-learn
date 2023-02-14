import React from 'react';
import { Break } from '../../../../common/Break';
import { Text, EColor } from '../../../../common/Text';
import { IconAnon } from '../../../../icons';
import styles from './userblock.css';

interface IUserBlockProps{
  avatarSrc?: string;
  userName?: string;
};
const CLIENT_ID = 'skocT9HvBKlB76Hw4FY7aw';
const TYPE = 'code';

export function UserBlock({avatarSrc, userName}: IUserBlockProps){
  console.log('clientID: ', process.env.CLIENT_ID);
  return (
    <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
     className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc 
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <IconAnon/>
        }
      </div>

      <div className={styles.userName}>
        <Break size={12}/>
        <Text size={20} color={userName ? EColor.black : EColor.grey99}>{userName || 'Аноним'}</Text>
      </div>
    </a>
  );
}
