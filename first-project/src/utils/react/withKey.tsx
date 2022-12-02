import * as React from 'react';

/* function Feed(props:{blocks:IBlockProps[]}){
    return(
        <div>
            {props.blocks.map((block:IBlockProps)=>{
                <Block key={block.id} {...block}/>
            })}
        </div>
    );
} */
export function withKey(key?: string) {
    return <E extends object, T extends React.ComponentType<E>>(component: T) => {
        (props: E, index: number) => {
            React.createElement(
                component,
                { ...props, key: key ? props[key as keyof E] : index },
                []
            );
        };
    };
}
