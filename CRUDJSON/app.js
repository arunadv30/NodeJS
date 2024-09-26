import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import apiRouter from "./router/apiRouter.js";

//create ecpress app
let app = express();

dotenv.config({ path: "./config/prod.config" });

let port = process.env.PORT;
let host = process.env.HOSTNAME;
app.use(morgan("tiny"));

app.use(express.json()); // middleware to parse the json bodies

app.get("/", (req, res) => {
  res.json({ msg: "Root request" });
});

app.use("/api", apiRouter);

app.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`Server is running http://${host}:${port}/`);
});
