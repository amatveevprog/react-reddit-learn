import { hot } from 'react-hot-loader/root';
import * as React from "react";
//const styles = require('./header.css');
// import styles from './header.css';

function HeaderComponent(){
    // console.log(styles, styles.example);
    return(
        <header>
            <h1>Reddit for our own and ev3erything i3s new absolutely 123!!!</h1>
        </header>
    )
}

export const Header = hot(HeaderComponent);