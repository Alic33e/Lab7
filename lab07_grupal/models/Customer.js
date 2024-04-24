import mongoose from "mongoose"
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    dni: {type: Number, required: true},
    full_name: {type: String, required: true },
    credit_card: {type: String, required: true},
    total_flights: {type: Number, required: true},
    total_lodgings: {type: Number, required: true},
    total_tours: {type: Number, required: true},
    phone_number: {type: String, required: true},
})

export default mongoose.model('Customer', CustomerSchema);