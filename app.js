const express = require("express");
const app = express();

app.get("/tasks", (req, res) => {
  const tasks = [
    {
      id: "1",
      isCompleted: true,
      description: "Estudiar hasta tarde",
    },
  ];

  res.json(tasks);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});