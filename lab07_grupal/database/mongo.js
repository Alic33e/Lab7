// dbConnection.js
import mongoose from 'mongoose';

export const connectDB = async () => {
 try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a MongoDB establecida con éxito');
 } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);
 }
};

export default mongoose.connection;