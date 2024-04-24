
// customerController.js
import Customer from '../models/Customer.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Obtener todos los vuelos
export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un vuelo por ID
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer no encontrado' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo vuelo
export const createCustomer = async (req, res) => {
    const customer = new Customer(req.body);
    try {
        await customer.save();
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un vuelo por ID
export const updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!customer) {
            return res.status(404).json({ message: 'Customer no encontrado' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un vuelo por ID
export const deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Customer eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
