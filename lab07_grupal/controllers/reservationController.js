import Reservation from '../Reservation.js'; // Ajusta la ruta según tu estructura de archivos

// Controlador para manejar las operaciones relacionadas con las reservas
const reservationController = {
  
  // Crea una nueva reserva
  createReservation: async (req, res) => {
    try {
      const newReservation = await Reservation.create(req.body);
      res.status(201).json(newReservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Obtiene una reserva por su ID
  getReservationById: async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Actualiza una reserva existente
  updateReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!reservation) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Elimina una reserva existente
  deleteReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndDelete(req.params.id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      res.json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default reservationController;
