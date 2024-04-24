// tourRoutes.js
import express from 'express';
import {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
} from '../controllers/tourController.js';

const router = express.Router();

// Rutas para obtener tours
router.get('/', getTours);
router.get('/:id', getTourById);

// Rutas para crear, actualizar y eliminar tours
router.post('/', createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

export default router;
