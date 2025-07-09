let tareas = [];
let nextId = 1;
let id_valorseguido = 1;
// region Crear Tareas
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

