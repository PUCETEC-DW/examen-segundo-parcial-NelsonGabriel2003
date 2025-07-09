import { crearTareas, obtenerTareas } from '../models/app.models.js';

export function crearTarea(req, res)
 {
  const { title, description, priority } = req.body;

  if (!title || !description || typeof priority !== 'number') {
    return res.status(400).json({ error: 'Datos inválidos o incompletos' });
  }

  const tareaCreada = crearTareas({ title, description, priority });

  if (!tareaCreada) {
    return res.status(400).json({ error: 'Prioridad inválida. Debe ser entre 1 y 5' });
  }

  return res.status(201).json(tareaCreada);
}

export function listarTareasControlador(req, res) {
  const lista = obtenerTareas();
  return res.status(200).json(lista);
}
