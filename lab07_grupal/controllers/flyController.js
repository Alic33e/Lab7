// flyController.js
import Fly from '../models/Fly.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Obtener todos los vuelos
export const getFlights = async (req, res) => {
    try {
        const flights = await Fly.find({});
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un vuelo por ID
export const getFlightById = async (req, res) => {
    try {
        const flight = await Fly.findById(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Vuelo no encontrado' });
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo vuelo
export const createFlight = async (req, res) => {
    const flight = new Fly(req.body);
    try {
        await flight.save();
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un vuelo por ID
export const updateFlight = async (req, res) => {
    try {
        const flight = await Fly.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flight) {
            return res.status(404).json({ message: 'Vuelo no encontrado' });
        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un vuelo por ID
export const deleteFlight = async (req, res) => {
    try {
        await Fly.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Vuelo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
