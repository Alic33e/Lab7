// ticketRoutes.js
import express from 'express';
import { getTickets, getTicketById, createTicket, updateTicket, deleteTicket } from '../controllers/ticketController.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para obtener tickets
router.get('/', getTickets);
router.get('/:id', getTicketById);

// Rutas para crear, actualizar y eliminar tickets
router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;