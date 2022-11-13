import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/pages/Layout';
import './main.global.css';
import { Header } from './shared/pages/Header';
import { Content } from './shared/pages/Content';
import { CardsList } from './shared/common/CardsList';
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

