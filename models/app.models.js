let tareas = [];
let nextId = 1;
let id_valorseguido = 1;
// region crear Tareas
export function crearTareas({ title, description, priority }) {
  if (priority < 1 || priority > 5) {
    console.log('Prioridad no válida, debe estar entre 1 y 5');
    return null;
  }

  const nuevaTarea = {
    id: nextId++,
    title,
    description,
    priority
  };

  tareas.push(nuevaTarea);
  return nuevaTarea;
}

// endregion 

// region actualizar tareas
export function actualizarTarea(id, datos) {
  const index = tareas.findIndex(tarea => tarea.id === id);
  if (index === -1) return null;

  tareas[index] = { ...tareas[index], ...datos };
  return tareas[index];
}
//endregion

//region Eliminar Tarea
export function eliminarTarea(id) {
  const index = tareas.findIndex(tarea => tarea.id === id);
  if (index === -1) return false;

  tareas.splice(index, 1);
  return true;
}
//endregion 