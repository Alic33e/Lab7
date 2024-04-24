// reservationController.js
import Reservation from '../models/Reservation.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Obtener todas las reservaciones
export const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({});
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una reservación por ID
export const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: 'Reservación no encontrada' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva reservación
export const createReservation = async (req, res) => {
    const reservation = new Reservation(req.body);
    try {
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una reservación por ID
export const updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservation) {
            return res.status(404).json({ message: 'Reservación no encontrada' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una reservación por ID
export const deleteReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Reservación eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};