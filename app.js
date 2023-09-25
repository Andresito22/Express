const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const tasks = [
  {
    id: 1,
    title: "Ir cita medica",
    completed: false,
  },
  {
    id: 2,
    title: "Estudiar",
    completed: true,
  },
  {
    id: 3,
    title: "Buscar vacantes",
    completed: false,
  },
];


app.get("/tasks", (req, res) => {
  res.status(200).json({ tasks });
});


app.get("/tasks/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed);
  res.status(200).json({ completedTasks });
});


app.get("/tasks/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  res.status(200).json({ incompleteTasks });
});


app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.status(200).json({ task });
});


app.post("/tasks", (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json({ task: newTask });
});


app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  tasks[index] = { ...tasks[index], ...updatedTask };
  res.status(200).json({ task: tasks[index] });
});


app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const deletedTask = tasks.splice(index, 1);
  res.status(200).json({ task: deletedTask[0] });
});

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
