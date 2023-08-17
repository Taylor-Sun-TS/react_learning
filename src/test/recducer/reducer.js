import { useReducer } from "react";
import './reducer.css';

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return { count: state.count };
    }
}

function Stateful(props) {
    const { initCount } = props;
    const [state, dispatch] = useReducer(reducer, { count: initCount ?? 0});

    return (
        <div className="userRecuder">
            <div className="labelCount">Count: { state.count }</div>
            <div className="buttonContainer">
                <button className="recuderButton incButton" onClick={ () => { dispatch({type: "increment"})} }>+</button>
                <button className="recuderButton decButton" onClick={ () => { dispatch({type: "decrement"})} }>-</button>
            </div>
        </div>
    );
}

export default Stateful;