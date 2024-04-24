// hotelRoutes.js
import express from 'express';
import { getHotels, getHotelById, createHotel, updateHotel, deleteHotel } from '../controllers/hotelController.js';

const router = express.Router();

// Rutas para obtener hoteles
router.get('/', getHotels);
router.get('/:id', getHotelById);

// Rutas para crear, actualizar y eliminar hoteles
router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

export default router;
