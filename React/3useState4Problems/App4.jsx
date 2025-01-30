import React, { useState } from "react";

export function App4() {
  // Initial tasks array with completed field
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
    { id: 4, name: "Task 4", completed: false },
    { id: 5, name: "Task 5", completed: false },
  ]);

  const [inputId, setInputId] = useState("");

  const toggleCompletion = () => {
    setTasks(
      tasks.map((task) => {
        if (task.id === parseInt(inputId)) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <input
        type="number"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Enter Task ID"
      />

      <button onClick={toggleCompletion}>Toggle Completed</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {
              `ID: ${task.id}, 
              Name: ${task.name}, 
              Completed: ${task.completed ? "Yes" : "No"}`
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
