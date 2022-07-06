import { hot } from 'react-hot-loader/root';
import * as React from "react";

function HeaderComponent(){
    return(
        <header>
            <h1>This is Reddit for our own hot reload is Происходит все, что пожелаешь!!!</h1>
        <p>... Ну или почти все...</p>
        </header>
    )
}

export const Header = hot(HeaderComponent);