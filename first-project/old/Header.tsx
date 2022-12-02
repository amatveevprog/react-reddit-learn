import { hot } from 'react-hot-loader/root';
import * as React from "react";
// const styles = require('./header.css');
import styles from './header.css';

function HeaderComponent(){
    return(
        <header>
            <h1 className={styles.example}>Reddit for our owl!</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);