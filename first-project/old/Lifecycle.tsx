import * as React from 'react';

interface ILifecycleProps {
    someProp: number;
}
interface ILifecycleState {
    stateField: number;
    isMounted: boolean;
}
export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState>{
    constructor(props: ILifecycleProps) {
        super(props);

        this.state = {
            stateField: 0,
            isMounted: false
        };

        this.handleClick = this.handleClick.bind(this);
    };

    public render() {
        return <div onClick={this.handleClick}>132</div>
    }

    private handleClick = () => {
        this.setState({ stateField: 1 });
    }

    static getDerivedStateFromProps(
        props: Readonly<ILifecycleProps>,
        state: Readonly<ILifecycleState>) {
            return {
                stateField: props.someProp,
            }
    }
    public componentDidMount(){
        // this.setState({isMounted:true});
    }
};


