import http from "http";
import fs from "fs";
import path from "path";

let server = http.createServer((req, resp) => {
  fs.readFile(
    path.join(process.cwd(), "views", "index.html"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      resp.end(data);
    }
  );
});
server.listen(8080, "127.0.0.1", (err) => {
  if (err) throw err;
  console.log(`Server is Running: http://127.0.0.1:8080 `);
});
