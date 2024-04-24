// reservationRoutes.js
import express from 'express';
import { getReservations, getReservationById, createReservation, updateReservation, deleteReservation } from '../controllers/reservationController.js';

const router = express.Router();


// Rutas para obtener reservaciones
router.get('/', getReservations);
router.get('/:id', getReservationById);

//Ruta para crear una nueva reserva
router.get('/', getFlights);
router.get('/:id', getFlightById);


// Rutas para crear, actualizar y eliminar reservaciones
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;