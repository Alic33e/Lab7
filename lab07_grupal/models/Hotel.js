import mongoose from "mongoose"
const { Schema } = mongoose;

const Hotel = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    price: {type: Number, required: true}
})

export default mongoose.model('Hotel', Hotel);