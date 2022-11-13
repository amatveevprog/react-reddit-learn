import * as React from 'react';
import { starWars, adjectives, uniqueNamesGenerator, animals } from 'unique-names-generator';

interface IStarWarsNameClassState{
    name: string;
    count: number;
}
export class StarWarsNameClass extends React.PureComponent<{},IStarWarsNameClassState>{
    state: Readonly<IStarWarsNameClassState> = {name: this.randomName(), count:0};
    /* constructor(props:{}){
        super(props);

        this.state={
            name: "123",
        }
    } */

    public render() {
        return (
            <section>
                <span>{this.randomName()}</span>
                <div>

                </div>
                <button onClick={this.handleClick}>Мне нужно имя!</button>
            </section>
        )
    }

    private handleClick = () => {
        this.setState({name: this.randomName()});
        this.setState((state,props)=>({
            count: state.count+1,
        }), () => {
            console.log(">> count: ", this.state.count);
        });
        
    };
    private randomName(): string {
        return uniqueNamesGenerator({dictionaries:[ starWars ], length:1})
    } 
}