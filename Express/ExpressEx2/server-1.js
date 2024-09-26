import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

let app = express();
//load configuration values
dotenv.config({ path: "./config/dev.config" });
let port = process.env.PORT;
let hostname = process.env.HOST;

/*
    API URL: http://127.0.0.1:8080/
*/
app.get("/", (req, resp) => {
  resp.send("Root Req.....");
});

/*
    API URL: http://127.0.0.1:8080/about
*/
app.get("/about", (req, resp) => {
  resp.send("About Req.....");
});
app.listen(port, hostname, (err) => {
  if (err) throw err;
  console.log(`Server Running on... http://${hostname}:${port}/`);
});
