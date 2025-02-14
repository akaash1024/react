//https://www.npmjs.com/package/redux-logger
//https://www.npmjs.com/package/@redux-devtools/extension
//https://www.npmjs.com/package/redux-logger

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'

const ADD_TASK = 'task/add'; // state/action
const DELETE_TASK = 'task/delete'; // state/action
const FETCH_TASK = 'task/fetch'

const initialState = {
  task: ["returns useSelector", 'I was testing'],
  isLoading: false,
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      })
      return {
        ...state,
        task: updatedTask,
      };

    case FETCH_TASK:
      return {
        ...state,
        task:[...state.task, ...action.payload]
      }
    default:
      return state;
  }
}


export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
console.log(store);


console.log('Initial Data', store.getState());


//Operation



// modifiying to function 
export const addTask = (data) => {
  return {
    type: ADD_TASK,
    payload: data
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  }
}


//creating middleware // which returns function 
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`)
      const task = await res.json();
      console.log(task); //returning array so, iterating
      dispatch({ type: FETCH_TASK, payload: task.map((currentTask)=>currentTask.title)})
    } catch (error) {
      console.log(error);
    }
  }
}


// //adding items
// store.dispatch(addTask('Buy Vegetable'))
// store.dispatch(addTask('Buy computer'))
// store.dispatch(addTask('Buy laptop'))

// console.log('Updated State', store.getState());

// store.dispatch(addTask('Buy Mango'))
// console.log('Updated State', store.getState());

// //removing 

// store.dispatch(deleteTask(1))
// console.log('After Removed', store.getState());





