import mongoose from "mongoose"
const { Schema } = mongoose;

const Fly = new Schema({
    origin_lat: { type: Number, required: true },
    origin_lng: { type: Number, required: true },
    destiny_lng: { type: Number, required: true}
    // Otros campos relevantes para los viajes
});

export default mongoose.model('Fly', Fly);