import mongoose from "mongoose"
const { Schema } = mongoose;

const Hotel = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    price: {type: Number, required: true}
})

export default mongoose.model('Hotel', Hotel);