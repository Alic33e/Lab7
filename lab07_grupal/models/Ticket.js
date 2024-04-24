import mongoose from 'mongoose';
const { Schema } = mongoose;

const TicketSchema = new Schema({
  id: { type: String, required: true },
  price: { type: Number, required: true },
  tour_id: { type: Number, required: true },
  fly_id: { type: Number, required: true },
  customer_id: { type: String, required: true },
  departure_date: { type: Date, required: true },
  arrival_date: { type: Date, required: true },
  date_purchase: { type: Date, required: true }
});

export default mongoose.model('Ticket', TicketSchema);
