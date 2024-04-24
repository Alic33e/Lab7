// ticketController.js
import Ticket from '../models/Ticket.js'; // Asegúrate de ajustar la ruta según tu estructura de archivos

// Obtener todos los tickets
export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un ticket por ID
export const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo ticket
export const createTicket = async (req, res) => {
    const newTicket = new Ticket(req.body);
    try {
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un ticket por ID
export const updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket no encontrado' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un ticket por ID
export const deleteTicket = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Ticket eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};