

import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
  task: [],
  isLoading: false,
}



const taskReducer = createSlice({
  name : 'task',
  initialState,
  reducers: {
    addTask(state,action) {
      state.task.push(action.payload)
      // state.task : [...state.task, action.payload] // switch to '=' we are in function right?!
      // state.task = [...state.task, action.payload] // we can also do that but immer handle here everything
    },
    deleteTask(state, action) {
      state.task = state.task.filter((currentTask, index) => index !== action.payload)
    },
    fetchTask(state, action) {
      state.task.push(action.payload)
    },
  }
})


console.log('MY TASK REDUCER',taskReducer); //returns object  
                          //- actions:     🔴
                          //      -addTask (f) 
                          //      -deleteTask (f)
                          //      -fetchTask (f)
                          //- reducer.. ., 🔴

export const {addTask, deleteTask} = taskReducer.actions; //destructuring from above

export const store = configureStore ({
  reducer : {
    taskReducer: taskReducer.reducer
  }
})

console.log('Initial Data', store.getState());

//Operation

//creating middleware // which returns function 
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`)
      const tasks  = await res.json();
      console.log(tasks); //returning array so, iterating
      // dispatch({ 
      //   type: FETCH_TASK, 
      //   payload: task.map((currentTask)=>currentTask.title)
      // })
      tasks.map((task) => {
        dispatch(taskReducer.actions.fetchTask(task.title));
      });
      
    } catch (error) {
      console.log(error);
    }
  }
}


//adding items
console.log(store.dispatch(addTask('Buy Vegetable')));
console.log(store.dispatch(addTask('Buy Fruits')));
console.log(store.getState());

console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());

console.log(store.dispatch(addTask('Buy Fruits22222')));
console.log(store.getState());