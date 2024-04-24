import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReservationSchema = new Schema({
  id: { type: String, required: true },
  date_reservation: { type: Date, required: true },
  tour_id: { type: Number, required: true },
  hotel_id: { type: Number, default: null },
  customer_id: { type: String, required: true },
  date_start: { type: Date, required: true },
  date_end: { type: Date, default: null },
  total_days: { type: Number, required: true },
  price: { type: Number, required: true }
});

export default mongoose.model('Reservation', ReservationSchema);
