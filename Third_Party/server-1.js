import http from "http";
import dotenv from "dotenv";
dotenv.config({ path: "./config/dev.config" });

let port = process.env.PORT;
let host = process.env.HOST;
console.log(port);
console.log(host);
