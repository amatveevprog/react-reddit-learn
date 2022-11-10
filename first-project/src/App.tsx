import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Lifecycle } from './Lifecycle';

// without HMR
/* export function App() {
    return (
        <div>content</div>
    )
} */

// with HMR:
function AppComponent() {
    return (
         <Layout>
          <Header />
          <Content>
            <CardsList/>
          </Content>
        </Layout> 
    );
};

export const App = hot(AppComponent);

