import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/pages/Layout';
import './main.global.css';
import { Header } from './shared/pages/Header';
import { Content } from './shared/pages/Content';
import { CardsList } from './shared/common/CardsList';
// import { Lifecycle } from './Lifecycle';
// import { MyHooks, useIsMounted } from './utils/MyHooks';
import { GenericList } from './utils/GenericList';
import { assignId, generateId, generateRandomString } from './utils/js/generateRandomIndex';
import { merge } from './utils/js/merge';
import { Dropdown } from './shared/common/Dropdown';
import { MenuItem } from './shared/common/Card/Menu/MenuItem';
import { Menu } from './shared/common/Card/Menu';
import { EColor, Text } from './shared/common/Text';
import { Break } from './shared/common/Break';
import { Menu2 } from './shared/common/Card/Menu/Menu2';
import { Icon, EIcons } from './shared/common/Icon';
// without HMR
/* export function App() {
    return (
        <div>content</div>
    )
} */
const LIST = [
  { As: 'li' as const, text: 'bbb' },
  { As: 'li' as const, text: 'bbb' },
  { As: 'li' as const, text: 'aaa' },
  { As: 'li' as const, text: 'ccc' },
  { As: 'li' as const, text: 'aaa' },
].map(generateId);
// with HMR:
function AppComponent() {
  /* const [isVisible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState(''); */
  const [list, setList] = React.useState(LIST);
  const [isDropdownOpened, setIsDropdownOpen] = React.useState(false);
  const handleItemClick = (id: string) => {
    setList(list.filter(item => item.id != id));
  }
  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
  };
  const MENU_LIST = [
    {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    }, {
      text: "Комментарии", className: "menu-item-comment", icon: "comment", As: 'li' as const, onClick: (id: string) => {
        console.log('Комментарии', id);
      }
    },
  ]
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* <button onClick={handleAdd}>Add element</button> */}
        {/* <ul>
                    <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
                </ul> */}

        {/*                 <div style={{ padding: 20 }}>
                    <br />
                    <Dropdown 
                    isOpen={isDropdownOpened}
                    onClose={()=>{
                        console.log('close');
                        setIsDropdownOpen(false);
                    }}
                    onOpen={()=>console.log('opened')}
                    button={<button onClick={()=>{setIsDropdownOpen(!isDropdownOpened)}}>Test</button>}>
                    <ul>
                    <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
                    </ul>
                    </Dropdown>
                </div>
                <MenuItem text={"Сохранить"} icon={"save"}/> */}
        <br />
        <Icon name={EIcons.block} />
        <Icon name={EIcons.block} size={16} />
        <Icon name={EIcons.block} size={24} />
        <Icon name={EIcons.block} size={20} />
        <Icon name={EIcons.comment} size={20} />
        <Icon name={EIcons.comment} />
        <Icon name={EIcons.comment} size={64} />
        <Icon name={EIcons.share} size={64} />
        <Icon name={EIcons.share} />
        <Icon name={EIcons.share} size={128} />
        <Icon name={EIcons.warning} size={128} />
        <Icon name={EIcons.warning} size={64} />
        <Icon name={EIcons.warning} size={32} />
        <Icon name={EIcons.warning} />

      </Content>
    </Layout>
  );
};

export const App = hot(() => <AppComponent />);

