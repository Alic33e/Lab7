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

app.use("/customers", customerRoutes);
app.use("/flights", flyRoutes);
app.use("/hotels", hotelRoutes);
app.use("/reservations", reservationRoutes);
app.use("/tickets", ticketRoutes);
app.use("/tours", tourRoutes);

app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(process.cwd() + "/views/index.html");

  app.get("/hotel", (_, res) => {
    res.sendFile(process.cwd() + "/views/hotels.html");
  });

  app.get("/flight", (_, res) => {
    res.sendFile(process.cwd() + "/views/flights.html");
  });

  app.get("/reservation", (_, res) => {
    res.sendFile(process.cwd() + "/views/reservations.html");
  });
});
