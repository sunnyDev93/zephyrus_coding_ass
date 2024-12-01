export const getTasks = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };
  
  export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  export const createTask = (task) => {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    return task;
  };
  
  export const updateTask = (id, updatedTask) => {
    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      saveTasks(tasks);
    }
    return tasks[index];
  };
  
  export const deleteTask = (id) => {
    const tasks = getTasks();
    const filteredTasks = tasks.filter((task) => task.id !== id);
    saveTasks(filteredTasks);
  };
  