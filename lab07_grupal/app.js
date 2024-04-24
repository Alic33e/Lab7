import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors("*"));

app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(process.cwd() + "/views/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(process.cwd() + "/views/contact.html");
});


app.get("/tours", (req, res) => {
  res.sendFile(process.cwd() + "/views/tours.html");
});



app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
