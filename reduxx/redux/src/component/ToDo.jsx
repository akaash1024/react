
import { useDispatch, useSelector } from "react-redux"
import { MdAddTask, MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask, fetchTask } from "../store";

export const Todo = () => {

    const [task, setTask] = useState('')

    const tasks = useSelector((state) => state.task);
    // console.log('react store', state.task);

    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task))
        return setTask('')
    }


    const handleTaskDelete = (id) => {
        return dispatch(deleteTask(id))
    }

    const handleFetchTask = () => {
        dispatch(fetchTask())
    }

    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i>To-Do List: </i>
                </h1>
                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            id="input-box"
                            placeholder="Add a new task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button>Add Task</button>
                    </form>

                </div>

                <button
                    onClick={handleFetchTask}
                >Fetch</button>

                <ul id="list-container">
                    {
                        tasks.map((currentTask, index) => {
                            return (
                                <li key={index}>
                                    <p>
                                        {index}: {currentTask}
                                    </p>
                                    <div>
                                        <MdDeleteForever
                                            className="icon-style"
                                            onClick={() => handleTaskDelete(index)}
                                        />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}