import express from 'express';
import { crearTarea, listarTareasControlador, actualizarTareaControlador, eliminarTareaControlador } from '../controllers/controller_app';

const router = express.Router();

router.post('/tasks', crearTarea);
router.get('/tasks', listarTareasControlador);
router.put('/tasks/:id', actualizarTareaControlador);
router.delete('/tasks/:id', eliminarTareaControlador);

export default router;
