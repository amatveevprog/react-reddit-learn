import * as React from 'react';
import { pipe } from './utils/js/pipe';
import { getValue } from './utils/Functional';
import { preventDefault } from './utils/react/preventDefault';
import { stopPropagation } from './utils/react/stopPropagation';

export function InputExample({ value, onChange }: any) {
    return (
        <input
            value={value}
            onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
        />
    );
}

function pick<K extends string>(prop: K){
    return <O extends Record<K, any>>(obj:O)=>obj[prop];
}

function isEqual<T>(left: T){
    return <E extends T>(right: E)=>(left === right);
}

const comments = [
    {id: 11, text: 'text one'},
    {id: 22, text: 'text two'},
    {id: 33, text: 'text three'},
    {id: 44, text: 'text four'},
]

function cond(fl:boolean){
    return !fl;
}

const filteredComments = comments.filter(({id})=>(id!==22));
const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop),isEqual(id), cond);
const filterWithId = createFilterBy('id');
const filterByValue = createFilterBy('value');
const filteredComments2 = comments.filter(filterWithId(22));

const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
);
