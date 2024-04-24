// flyRoutes.js
import express from 'express';
import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from '../controllers/customerController.js';

const router = express.Router();

// Rutas para obtener vuelos
router.get('/', getCustomers);
router.get('/:id', getCustomerById);

// Rutas para crear, actualizar y eliminar vuelos
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;