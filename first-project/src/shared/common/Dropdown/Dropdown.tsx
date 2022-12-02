import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode; //то, на что нажимаем
  children: React.ReactNode; // выпадающие элементы
  isOpen?: boolean; // чтобы преобразовать в controlled-элемент, isOpen контролируется из родительского компонента
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const [isMounted] = useIsMounted();
  React.useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);
  React.useEffect(() => {
    isDropdownOpen ?
      (isMounted ? onOpen() : void 0) :
      (isMounted ? onClose() : void 0);
  }, [isDropdownOpen]);
  const handleOpen = () => {
    if (isOpen === undefined) {
      //если не задан сверху, список переключается автоматически
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{/** хендлер на переключение объекта */}
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>)}
    </div>
  );
}
function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}
