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

  app.get("/404", (_, res) => {
    res.sendFile(process.cwd() + "/views/404.html");
  });

  app.get("/about", (_, res) => {
    res.sendFile(process.cwd() + "/views/about.html");
  });

  app.get("/booking", (_, res) => {
    res.sendFile(process.cwd() + "/views/booking.html");
  });

  app.get("/contact", (_, res) => {
    res.sendFile(process.cwd() + "/views/contact.html");
  });

  app.get("/destination", (_, res) => {
    res.sendFile(process.cwd() + "/views/destination.html");
  });

  app.get("/package", (_, res) => {
    res.sendFile(process.cwd() + "/views/package.html");
  });

  app.get("/service", (_, res) => {
    res.sendFile(process.cwd() + "/views/service.html");
  });

  app.get("/team", (_, res) => {
    res.sendFile(process.cwd() + "/views/team.html");
  });

  app.get("/testimonial", (_, res) => {
    res.sendFile(process.cwd() + "/views/testimonial.html");
  });
});
