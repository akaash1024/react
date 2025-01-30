
import { useDispatch, useSelector } from "react-redux"
import { MdAddTask, MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, clearTask, deleteTask, fetchTask, increaseCount } from "../store";


export const Todo = () => {

    const [task, setTask] = useState('')

    const [counterStep, setCounterStep] = useState(1)


    const tasks = useSelector((state) => state.__task__.taskInitial)
    const counters = useSelector((state) => state.__counter__.counterInitial)
    console.log(tasks);
    console.log(counters);



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

    const handleIncreaseClick = () => handleIncrease(counterStep);
    
    const handleIncrease = (step) => {
        dispatch(increaseCount(step))
    }

    const handleClearTask = () => {
        dispatch(clearTask())
    }

    return (
        <>
            <div>
                <button onClick={handleClearTask}>
                    Clear
                </button>
            </div>
            <div>
                <h1>Counter : {counters}</h1>
                <label htmlFor="stepCounter">
                    <input
                        type="number"
                        id="stepCounter"
                        placeholder="step please!!"
                        value={counterStep}
                        onChange={(e) => setCounterStep(Number(e.target.value))}
                    />
                </label>

                

                <button onClick={handleIncreaseClick}>++++++</button>
            </div>


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
                            tasks?.map((currentTask, index) => {
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
        </>
    )
}