import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("Hello, GM");
});

app.listen(8080, "127.0.0.1", (err) => {
  if (err) throw err;
  console.log(`Server Running...`);
});
