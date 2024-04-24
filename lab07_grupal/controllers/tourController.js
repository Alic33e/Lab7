// tourController.js
import Tour from '../models/Tour.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Obtener todos los tours
export const getTours = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un tour por ID
export const getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ message: 'Tour no encontrado' });
        }
        res.status(200).json(tour);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo tour
export const createTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        await tour.save();
        res.status(201).json(tour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un tour por ID
export const updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tour) {
            return res.status(404).json({ message: 'Tour no encontrado' });
        }
        res.status(200).json(tour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un tour por ID
export const deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Tour eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};