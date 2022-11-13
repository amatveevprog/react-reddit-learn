import * as React from 'react';
import { starWars, adjectives, uniqueNamesGenerator } from 'unique-names-generator';
// import styles from '/Users/amatveev/SkillBox/first-project/src/shared/Names.less';

interface INameState {
    adjective: string;
    starWarsWord: string;
};

type IFirstName = Pick<INameState,'adjective'>;
type ILastName = Pick<INameState,'starWarsWord'>;

export class Names extends React.Component<{}, INameState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            adjective: this.generateWord(adjectives),
            starWarsWord: this.generateWord(starWars),
        }
    }

    public componentDidMount(): void {
        const interval = setInterval(() => {
            this.setState({
                adjective: this.generateWord(adjectives)
            });
                
        },2000);
        setTimeout(() => {
            clearInterval(interval);
        }, 6000);
    }

    public render() {
        return (
            <h1 className="words">
                <Adjective adjective={this.state.adjective} />
                {'\u00A0'}
                <StarWarsWord starWarsWord={this.state.starWarsWord} />
            </h1>
        )
    }
    private generateWord(dictionary: string[]) {
        const defaultGeneratorConfig = {
            length: 1,
            dictionaries: []
        };

        return uniqueNamesGenerator(
            Object.assign(
                {},
                defaultGeneratorConfig,
                { dictionaries: [dictionary] }
            )
        )
    }
}

function Adjective(props: IFirstName){
  console.log('==========================');
  console.log('>> Adjective is printing');
  return <span>{props.adjective}</span>;
};

const StarWarsWord = React.memo(
    function StarWarsWordComponent(props: ILastName){
        // console.log('==========================');
        console.log('>> Star Wars Word is printing');
        return <span>{props.starWarsWord}</span>;
      }
);
