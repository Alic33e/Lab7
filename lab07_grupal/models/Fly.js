import mongoose from "mongoose"
const { Schema } = mongoose;

const Fly = new Schema({
    origin_lat: { type: Number, required: true },
    origin_lng: { type: Number, required: true },
    destiny_lng: { type: Number, required: true},
    precio: { type: Number, required: true},
    origin_name: { type: String, required: true },
    destiny_name: { type: String, required: true },
    aero_line: { type: String, required: true }
});

export default mongoose.model('Fly', Fly);