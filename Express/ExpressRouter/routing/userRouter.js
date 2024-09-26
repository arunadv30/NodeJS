import express from "express";

let router = express.Router();

/*
    API URL: http://127.0.0.1:8080/user/read
    Method:GET
*/
router.get("/read", (req, res) => {
  console.log("Test case 123");
  return res.send("User - read - Request");
});

/*
    API URL: http://127.0.0.1:8080/user/add
    Method:POST
*/
router.post("/add", (req, res) => {
  return res.json({ msg: "new user created" });
});
/*
    API URL: http://127.0.0.1:8080/user/del
    Method:DELETE
*/
router.delete("/del", (req, res) => {
  return res.json({ msg: "user deleted successfully" });
});

export default router;
