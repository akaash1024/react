import { useState } from "react";

export const App = () => {
  const arr = ["task1", "task2", "task3"];
  const [task, setTask] = useState(arr);
  const [newTask, setNewTask] = useState("");

  function handleFormSubmit(e) {
    console.log(e);
    e.preventDefault();
    setTask(prevTasks => [...prevTasks, newTask]);
    return setNewTask("");
  }

  return (
    <>
      <h1>Application</h1>
      <progress></progress>
      <pre>
        <code>{JSON.stringify(task, null, 2)}</code>
      </pre>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoFocus
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // ! check console this event while rendering
        />
        <button>++++</button>
      </form>
    </>
  );
};
