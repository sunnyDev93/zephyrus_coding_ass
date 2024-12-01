let tasks = [];
let nextId = 1;

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const newTask = { id: nextId++, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index !== -1) {
    tasks[index] = { id: parseInt(id), ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).send("Task not found");
  }
};

exports.deleteTask = (req, res) => {
  tasks = tasks.filter((task) => task.id !== parseInt(req.params.id));
  res.status(204).send();
};
