import React, { Component } from 'react';


// const ErrorComponent = (props) => <div>{props.ignore}</div>
class GFGComponent extends Component {
    // GFGComponent throws error as state of
    // GFGCompnonent is not defined
    // creates error
    render() {
        return <h1>{this.state.heading}</h1>;
    }
}


class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            seed: 0,
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed,
            }
        }
        return null
    }

    componentDidMount() {
        console.log('component did mount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProps && this.props.ignoreProps !== nextProps.ignoreProps) {
            console.log("should component update - false");
            return false
        }
        console.log("should component update - true");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, preState) {
        return null
    }

    render() {
        console.log('Render');
        if (this.props.showErrorComponent && this.state.error) {
            console.log(this.state.error.message);
            return <div>
                <p>Error encountered!</p>
            </div>
        }

        return <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <div className='counter'>
                Counter: {this.state.counter}
            </div>
            {this.props.showErrorComponent ? <GFGComponent /> : null}
        </div>
    }

    componentDidUpdate(prevProps, preState, snapshot) {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')

    }

    componentDidCatch(error, info) {
        console.log('Component did catch')

        this.setState({ error, info })
    }

}

export default Counter;
