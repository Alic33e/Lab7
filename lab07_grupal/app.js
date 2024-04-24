import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import { connectDB } from "./database/mongo.js";
import flyRoutes from './routes/flyRoutes.js';


dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDB().then(() => {
  app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
  });
 }).catch(err => {
  console.error('Error al conectar a la base de datos:', err);
 });

app.use(cors("*"));

// Utilizar las rutas de vuelos
app.use('/flights', flyRoutes);

app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");

  app.get("/about", (req, res) => {
    res.sendFile(process.cwd() + "/views/about.html");
  });
  
  app.get("/contact", (req, res) => {
    res.sendFile(process.cwd() + "/views/contact.html");
  });
  
  
  app.get("/tours", (req, res) => {
    res.sendFile(process.cwd() + "/views/tours.html");
  });
});