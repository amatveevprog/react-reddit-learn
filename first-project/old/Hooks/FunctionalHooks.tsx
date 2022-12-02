import * as React from 'react';

export function MyHooks({ title, id }: { title: string, id?: string }) {
    /* React.useEffect(() => {
        console.log('componentDidMount()');
        console.log('componentWillUpdate()');
    }); */

    /* React.useEffect(()=>{
        console.log('componentDidMount()');
        return ()=>{
            console.log('componentWillUnmount()');
        }
    },[]); */

/*     React.useEffect(()=>{
         console.log('componentWillRecieveProps()'+title);
          return ()=>{
             console.log('componentWillRecieveProps()'+title);
         } 
     },[title]); */
     const [isMounted] = useIsMounted();
     console.log(isMounted); // аналогично React.useEffect без зависимостей
     React.useEffect(()=>{
        console.log('isMounted: '+isMounted);
     },[isMounted]);
    return (

        <div style={{width:window.innerWidth}}>{title} <h2>{id}</h2></div>
    );
}

// собственный хук
// чтобы не отображать какие-то части в непремонтированном компоненте
// это может быть важно, когда мы рендерим что-то на сервере
// style={{width:window.innerWidth}} если SSR, то напишет, что "window is not defined" 
// (при изначальном состоянии в App.tsx const [visible,setVisible] = React.useState(true);)
// это значит, что компонент MyHooks можно использовать только на клиенте
// А чтобы использовать что-то только на клиенте, замечательно использовать хук useIsMounted
// Хуки не работают на сервере!!! Монтируется все на клиенте!

// в SSR то, что изменяется внутри хука, будет равно изначальному значению
// Таким образом, мы можем использовать компонент, который использует DOM API 
// и работает только на клиентской стороне


export function useIsMounted(){
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(()=>{
        setIsMounted(true);
    },[]);

    return [isMounted];
}

// Правила: 
// 1. Хуки должны быть вызваны только из тела функционального компонента
//  Если пытаться вызвать хуки в класс-компоненте, вы получите ошибку
// 2. Нельзя менять порядок исполнения хуков или оборачивать хуки в if
// Каждый раз, когда компонент рендерится в первый раз, React запоминает
// порядок исполнения всех хуков в этом компоненте. Этот порядок один постоянный
// выйти из данной ситуации можно через React.useEffect(()=>{},[isMounted]) - выполнить код внутри
// когда флаг isMounted изменится

// useMemo - полезный хук, который используется в случае сложных вычислений, маппингов и т.д.
// внимание на result который рендерится!
/* const items = 10;
    const multiplier = 5;
    const result = React.useMemo(()=>{
        console.log('CALC');
        return calculate(items,multiplier);
    },[items,multiplier])
    return (
-----------------------------------------------------------------------------Y
        <div style={{width: window.innerWidth}}>{title} <h2>{id}</h2> <h1>{result}</h1></div>
    ); 
    
    */