const mongoose = require('mongoose');

async function connectDB() {
 try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a MongoDB establecida con éxito');
 } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
 }
}

connectDB().catch(err => console.error(err));

module.exports = mongoose.connection;