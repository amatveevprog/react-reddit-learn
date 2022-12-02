import * as React from 'react';
export interface IItem {
    id: string;
    text?: string;
    onClick?: (id:string) => void;
    className?: string;
    As?: "a" | "li" | "button" | "div";
    href?: string;
    children?: React.ReactNode;
};

export interface IGenericListProps {
    list: IItem[],
};


// Ключи, как индексы указывать плохо. Если идет изменение-удаление элементов, 
// и добавление в середину, а также замена элементов 

const noop = () => {};
// список, который может рендерить любые списки
export function GenericList({list}:IGenericListProps){
    return(
        <>
            {list.map(({As="div", text, onClick=noop, className, id, href, children})=>(
                <As
                    className={className}
                    onClick={()=>{onClick(id)}}
                    key={id}
                    href={href}
                >
                   {children ? children : text} 
                </As>
            ))}
        </>
    )
}