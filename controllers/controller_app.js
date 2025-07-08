import { crearTareas, obtenerTareas, actualizarTarea,eliminarTarea } from '../models/app.models.js';

//region Crear Tarea
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
//endregion


//region listar tarea
export function listarTareasControlador(req, res) {
  const lista = obtenerTareas();
  return res.status(200).json(lista);
}
// endregion


//region actualizar
export function actualizarTareaControlador(req, res) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const datos = req.body;

  const tareaActualizada = actualizarTarea(id, datos);

  if (!tareaActualizada) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  return res.status(200).json(tareaActualizada);
}
// endregion


//region EliminarTarea
export function eliminarTareaControlador(req, res) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

  const eliminado = eliminarTarea(id);

  if (!eliminado) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  return res.status(200).json({ mensaje: 'Tarea eliminada' });
}
//endregion