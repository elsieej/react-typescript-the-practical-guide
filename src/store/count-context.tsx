import {createContext, PropsWithChildren, useReducer} from "react";

type CountState = {
    count: number;
}

const initialState: CountState = {
    count: 0
}

type CountContextValue = CountState & {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

type IncrementAction = {
    type: 'INCREMENT';
    payload: number;
}

type DecrementAction = {
    type: 'DECREMENT';
    payload: number;
}

type ResetAction = {
    type: 'RESET';
}

type Action = IncrementAction | DecrementAction | ResetAction

const countReducer = (state: CountState, action: Action): CountState =>  {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

const CountContext = createContext<CountContextValue | null>(null);

type Props = PropsWithChildren

const CountContextProvider = ({children}: Props) => {
    const [countState, dispatch] = useReducer(countReducer, initialState)

    const ctx: CountContextValue = {
        count: countState.count,
        increment: () => dispatch({
            type: 'INCREMENT',
            payload: 1
        }),
        decrement: () => dispatch({
            type: 'DECREMENT',
            payload: 1
        }),
        reset: () => dispatch({type: 'RESET'})
    }

    return (
        <CountContext.Provider value={ctx}>
            {children}
        </CountContext.Provider>
    )
}



export {CountContextProvider, CountContext}

