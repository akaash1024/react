import React, {useState} from "react";


export function App3() {
  // Initial tasks array
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
    { id: 5, name: "Task 5" },
  ]);

  const [inputId, setInputId] = useState("");
  const removeTask = () => {
    setTasks(tasks.filter((task) => task.id !== parseInt(inputId)));
  };

  return (
    <div>
      <input
        type="number"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Enter Task ID"
      />
      <button onClick={removeTask}>Remove Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {`ID: ${task.id}, Name: ${task.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}