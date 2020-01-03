import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setTo } = {}) => ({
    type: 'SET',
    setTo
});

const setReset = () => ({
    type: 'RESET',
});
//reducers
// // 1. pure functions
//    2. never change state or action
   
//count reducer

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.setTo
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 50}));
store.dispatch(decrementCount({decrementBy: 50}));
store.dispatch(decrementCount());
store.dispatch(setCount({setTo: 101}));
store.dispatch(setReset());
