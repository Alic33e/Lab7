import express from 'express';
import { getFlights, getFlightById, createFlight, updateFlight, deleteFlight } from '../controllers/reservationController';

const router = express.Router();

// Ruta para crear una nueva reserva
router.get('/', getFlights);
router.get('/:id', getFlightById);

// Rutas para crear, actualizar y eliminar vuelos
router.post('/', createFlight);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

export default router;
