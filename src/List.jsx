import { useState } from "react";

function List() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        value={newTask}
        onChange={handleChange}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>

            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </>
  );
}

export default List;