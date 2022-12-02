import { pickFromSyntheticEvent } from '../src/utils/react/pickFromSyntheticEvent';
import { preventDefault } from '../src/utils/react/preventDefault';
import { stopPropagation } from '../src/utils/react/stopPropagation';
import { withKey } from '../src/utils/react/withKey';
import * as React from 'react';

interface IBlockProps {
    title: string;
    id: string;
}


const withIdKey = withKey('id');
/* function Feed(props: { blocks: IBlockProps[] }) {
    return (
        <div>
            {props.blocks.map(withIdKey(Block))}
        </div>
    );
}

function Block(props: IBlockProps) {
    return (
        <div>{props.title}</div>
    );
} */



function Input(props: { onChange: (value: string) => void, value: string }) {
    <input value={props.value} onChange={getValue(props.onChange)} />
};

function Checkbox({ onChange, value }: { onChange: (value: boolean) => void, value: boolean }) {
    <input type="checkbox" checked={value} onChange={getChecked(onChange)} />
};

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

// 3 
function NotStandardLink(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}

interface InputProps {
    onChange: (value: string) => void;
    value: string;
}

function Input2({value, onChange}: InputProps){
    return (
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>
    )
}