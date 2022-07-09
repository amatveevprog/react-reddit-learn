import { hot } from 'react-hot-loader/root';
import * as React from "react";
// const styles = require('./header.css');
import styles from './header.less';

function HeaderComponent(){
    console.log(styles);
    return(
        <header>
            <h1 className={styles.example}>eExf</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);