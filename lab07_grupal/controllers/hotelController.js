// hotelController.js
import Hotel from '../models/Hotel.js'; // Ajusta la ruta según tu estructura de archivos

// Obtener todos los hoteles
export const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un hotel por ID
export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel no encontrado' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo hotel
export const createHotel = async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        await hotel.save();
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un hotel por ID
export const updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel no encontrado' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un hotel por ID
export const deleteHotel = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hotel eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
