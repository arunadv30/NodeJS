import express from "express";
let router = express.Router();

/*
Usage  : create request - like create new user/product/order
API URL:  http://127.0.0.1:8080/api/add
Method Type: PORT
Req Fields: ---
*/
router.post("/add", (req, resp) => {
  return resp.json({ msg: "POST Request" });
});

/*
Usage  : read req - get all users/empl/products/orders
API URL:  http://127.0.0.1:8080/api/read
Method Type: GET
Req Fields: ---
*/
router.get("/read", (req, resp) => {
  return resp.json({ msg: "GET Request" });
});

/*
Usage  : update req - update user/product/order
API URL:  http://127.0.0.1:8080/api/update
Method Type: PUT
Req Fields: ---
*/
router.put("/update", (req, resp) => {
  return resp.json({ msg: "PUT Request" });
});

/*
Usage  : delete req - delete  user/product/order
API URL:  http://127.0.0.1:8080/api/del
Method Type: DELETE
Req Fields: ---
*/
router.delete("/del", (req, resp) => {
  return resp.json({ msg: "DELETE  Request" });
});

export default router;
