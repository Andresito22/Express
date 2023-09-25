function validateTaskData(req, res, next) {
  const tarea = req.body;

  if (!tarea) {
    return res.status(400).json({ error: "El cuerpo de la solicitud está vacío." });
  }

  if (!tarea.id || typeof tarea.isCompleted === "undefined" || !tarea.description) {
    return res.status(400).json({ error: "La información de la tarea es inválida o faltan atributos." });
  }

  next();
}

module.exports = {
  validateTaskData,
};
