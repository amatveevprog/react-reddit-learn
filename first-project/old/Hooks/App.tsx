import * as React from 'react';
import { hot } from 'react-hot-loader/root';
/* import { Layout } from './shared/pages/Layout';
 */import './main.global.css';
/* import { Header } from './shared/pages/Header';
import { Content } from './shared/pages/Content';
import { CardsList } from './shared/common/CardsList';
import { Lifecycle } from './Lifecycle';
import { getValue } from './utils/Functional'; */
import { MyHooks, useIsMounted } from './FunctionalHooks';

// without HMR
/* export function App() {
    return (
        <div>content</div>
    )
} */

// with HMR:
function AppComponent() {
    // const [visible,setVisible] = React.useState(true);
    const [title,setTitle] = React.useState('');
    const [isVisible] = useIsMounted();
    return (<div>123</div>
      /*    <Layout>
          <Header />
          <Content>
            <CardsList/>
            {/* <button onClick={()=>{setVisible(!isVisible)}}>Change me!</button> *
            {/* <input type="text" onChange={getValue(setTitle)}/>
            {isVisible && <MyHooks title={title} id="11"/>}
          </Content>
        </Layout> */
    );
};

export const App = hot(()=><AppComponent/>);

