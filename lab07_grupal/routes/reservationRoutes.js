import express from 'express';
import { getFlights, 
    getReservationById, 
    createReservation, 
    updateReservation, 
    deleteReservation } from '../controllers/reservationController.js';

const router = express.Router();

// Ruta para crear una nueva reserva
router.get('/', getFlights);
router.get('/:id', getReservationById);

// Rutas para crear, actualizar y eliminar vuelos
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;
