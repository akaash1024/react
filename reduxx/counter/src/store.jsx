import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'


import { composeWithDevTools } from '@redux-devtools/extension';

const INCREASE_COUNT = 'count/increase';
const DECREASE_COUNT = 'count/decrease';

const initialState = { counter: 0 };



const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return { ...state, counter: state.counter + action.payload };
        case DECREASE_COUNT:
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};



// export const store = createStore(counterReducer, applyMiddleware(logger))
export const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger, thunk``)))
console.log(store);

console.log('initial store', store.getState());

//increament
store.dispatch({
    type: INCREASE_COUNT,
    payload: 10,
})

console.log('updated by manual', store.getState());

//creating function now

export const increaseCount = (step = 1) => {
    return {
        type: INCREASE_COUNT,
        payload: step,
    }
}

export const decreaseCount = (step = 1) => {
    return {
        type: DECREASE_COUNT,
        payload: step,
    }
}


// performing operation 

store.dispatch(increaseCount(500))
store.dispatch(increaseCount(1000))

console.log('Addded 500+1000', store.getState());

store.dispatch(decreaseCount(500))
console.log('Subtrated 500', store.getState());



