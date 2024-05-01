import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import { connectDB } from "./database/mongo.js";
import flyRoutes from "./routes/flyRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors("*"));

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });

app.use("/customer", customerRoutes);
app.use("/flights", flyRoutes);
app.use("/hotel", hotelRoutes);
app.use("/reservation", reservationRoutes);
app.use("/ticket", ticketRoutes);
app.use("/tour", tourRoutes);

app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(process.cwd() + "/views/index.html");

  app.get("/hotels", (_, res) => {
    res.sendFile(process.cwd() + "/views/hotel.html");
  });

  app.get("/flights", (_, res) => {
    res.sendFile(process.cwd() + "/views/flights.html");
  });

  app.get("/reservations", (_, res) => {
    res.sendFile(process.cwd() + "/views/reservations.html");
  });
});
