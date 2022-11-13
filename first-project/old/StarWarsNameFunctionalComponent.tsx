import * as React from 'react';
import { starWars, adjectives, uniqueNamesGenerator, animals } from 'unique-names-generator';

interface IStarWarsNameFunctionalState{
    name: string;
    count: number;
};

export function StarWarsNameFunction(){
    const randomName = ()=> uniqueNamesGenerator({dictionaries: [starWars], length: 1});
    /* const [name, setName] = React.useState(randomName);
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setName(randomName);
        setCount((prevCount) => prevCount + 1);
    };
    console.log('>> ', count); */
    const [state, setState] = React.useState<IStarWarsNameFunctionalState>({
        name: randomName(),
        count:0
    });
    const handleClick = () => {
        setState((prevState)=>({
            ...prevState,
            count: prevState.count + 1,
        }));
        setState((prevState)=>({
            ...prevState,
            name: randomName(),
        }));

    };
    console.log('>> ', state.count); 
    return (
        <section>
            <span>{state.name}</span>
            <div>

            </div>
            <button onClick={handleClick}>Мне нужно имя!</button>
        </section>
    )
}
