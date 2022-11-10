import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { Header } from '../shared/Header';
import { App } from '../App';
/* import { Names } from '../shared/Names.tsx';
import { StarWarsNameClass } from '../shared/StarWarsNameClass.tsx';
import { StarWarsNameFunction } from '../shared/StarWarsNameFunctionalComponent.tsx';
 */

// this is for SSR!
window.addEventListener('load', () => {
    // ReactDom.hydrate(<StarWarsNameFunction />, document.getElementById('react_root'));
    ReactDom.hydrate(<App />, document.getElementById('react_root'));
});