import express from 'express';
import { crearTarea,listarTareasControlador } from '../controllers/controller_app';

const router = express.Router();

router.post('/tasks', crearTarea);
router.get('/tasks', listarTareasControlador);
export default router;

