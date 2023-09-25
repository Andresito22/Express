const express = require("express");
const router = express.Router();

const tasks = [
  {
    id: "1",
    isCompleted: false,
    description: "salir a caminar",
  },
  {
    id: "2",
    isCompleted: true,
    description: "estudiar hasta tarde",
  },
];

router.get("/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});

router.get("/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = router;