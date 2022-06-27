import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './Header';


// this is for SSR!
window.addEventListener('load', ()=>{
    ReactDom.render(<Header />, document.getElementById('react_root'));
});

