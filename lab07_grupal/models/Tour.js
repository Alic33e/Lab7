import mongoose from 'mongoose';
const { Schema } = mongoose;

const TourSchema = new Schema({
    id: { type: Number, required: true },
    id_customer: { type: String, required: true }
},
{
    timestamps: true
}
);

export default mongoose.model('Tour', TourSchema);
