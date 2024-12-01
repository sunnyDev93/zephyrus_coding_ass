import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    const fetchedTasks = getTasks();
    setTasks(fetchedTasks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTask = await updateTask(editTaskId, task);
      setTasks(tasks.map((t) => (t.id === editTaskId ? updatedTask : t)));
      setIsEditing(false);
      setEditTaskId(null);
    } else {
      const newTask = await createTask({ id: Date.now(), ...task });
      setTasks([...tasks, newTask]);
    }
    setTask({ title: "", description: "", dueDate: "" });
  };

  const handleEdit = (task) => {
    setIsEditing(true);
    setEditTaskId(task.id);
    setTask(task);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm
        task={task}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
