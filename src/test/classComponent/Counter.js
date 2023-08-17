
import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    state = {
        count: 0
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.setState({
            count: this.props.initCount ?? 0
        });
        console.log("class component: mount");
    }

    componentDidUpdate() {
        console.log("class component: state change");
    }

    componentWillUnmount() {
        console.log("class component: unmount");
    }

    reducer(state, action) {
        switch(action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return { count: state.count };
        }
    }

    dispatch(action) {
        const newState = this.reducer(this.state, action);

        this.setState({
            ...this.state,
            ...newState
        });
    }

    render() {
        return (
            <div className="userRecuder">
                <div className="labelCount">Count: { this.state.count }</div>
                <div className="buttonContainer">
                    <button className="recuderButton incButton" onClick={ () => { this.dispatch({type: "increment"})} }>+</button>
                    <button className="recuderButton decButton" onClick={ () => { this.dispatch({type: "decrement"})} }>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;