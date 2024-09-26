import express from "express";
import morgan from "morgan";
import userRouter from "./routing/userRouter.js";

let app = express();
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Root Request");
});

app.use("/user", userRouter);

app.listen(8080, "127.0.0.1", (err) => {
  if (err) throw err;
  console.log(`Server is Running on.. http://127.0.0.1:8080/`);
});
