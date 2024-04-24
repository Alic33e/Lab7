// reservationRoutes.js
import express from 'express';
import { getReservations, getReservationById, createReservation, updateReservation, deleteReservation } from '../controllers/reservationController.js';

const router = express.Router();

<<<<<<< HEAD
// Rutas para obtener reservaciones
router.get('/', getReservations);
router.get('/:id', getReservationById);
=======
//Ruta para crear una nueva reserva
router.get('/', getFlights);
router.get('/:id', getFlightById);
>>>>>>> 11f38f2be63035669440bdbd6179946e440206b0

// Rutas para crear, actualizar y eliminar reservaciones
router.post('/', createReservation);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;