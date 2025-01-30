import { configureStore, createSlice } from '@reduxjs/toolkit';


const taskInitialState = {
  taskInitial: ["useSelector state value from here"],
  isLoading: false,
};

const counterInitialState = {
  counterInitial: 1000,
};

const taskReducer = createSlice({
  name: 'task',
  initialState: taskInitialState,
  reducers: {
    addTask(state, action) {
      state.taskInitial.push(action.payload);
    },
    deleteTask(state, action) {
      state.taskInitial = state.taskInitial.filter((currentTask, index) => index !== action.payload);
    },
    fetchTask(state, action) {
      state.taskInitial.push(action.payload);
    },
    clearTask(state, action) {
      state.taskInitial = []
    }
  }
});

const counterReducer = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increaseCount(state, action) {
      state.counterInitial += action.payload || 1;
    }
  }
});

// Logging reducers and actions
// console.log('MY COUNTER REDUCER', counterReducer); 
// console.log('MY TASK REDUCER', taskReducer); 

// Export actions
export const { addTask, deleteTask, clearTask } = taskReducer.actions; 
export const { increaseCount } = counterReducer.actions;

export const store = configureStore({
  reducer: {
    __task__: taskReducer.reducer,
    __counter__: counterReducer.reducer
  }
});

// Async thunk for fetching tasks
export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
      const tasks = await res.json();
      tasks.forEach((task) => {
        dispatch(taskReducer.actions.fetchTask(task.title));
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Testing the store functionality
// console.log(store.dispatch(addTask('Buy Vegetable')));
// console.log(store.dispatch(addTask('Buy Fruits')));
// console.log(store.getState());

// //counter update
// console.log(store.dispatch(increaseCount(500)));


// console.log(store.dispatch(deleteTask(1)));
// console.log(store.getState());

// console.log(store.dispatch(addTask('Buy Fruits22222')));
// console.log(store.getState());
