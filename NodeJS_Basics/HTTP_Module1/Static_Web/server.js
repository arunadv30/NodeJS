import http, { createServer } from "http";
import fs from "fs";
import path from "path";

let server = createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile(
      path.join(process.cwd(), "views", "index.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(process.cwd(), "views", "about.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        res.end(data);
      }
    );
  }
});

server.listen(8080, "127.0.0.1", (err) => {
  if (err) throw err;
  console.log(`server Running: http://127.0.0.1:8080`);
});
