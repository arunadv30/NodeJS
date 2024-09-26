import express from "express";
let router = express.Router();

/*
Usage  : create request - like create new user/product/order
API URL:  http://127.0.0.1:8080/api/
Method Type: POST
Req Fields: ---
*/
router.post("/", (req, resp) => {
  return resp.json({ msg: "POST Request" });
});

/*
Usage  : read req - get all users/empl/products/orders
API URL:  http://127.0.0.1:8080/api/
Method Type: GET
Req Fields: ---
*/
router.get("/", (req, resp) => {
  return resp.json({ msg: "GET Request" });
});

/*
Usage  : update req - update user/product/order
API URL:  http://127.0.0.1:8080/api/
Method Type: PUT
Req Fields: ---
*/
router.put("/", (req, resp) => {
  return resp.json({ msg: "PUT Request" });
});

/*
Usage  : delete req - delete  user/product/order
API URL:  http://127.0.0.1:8080/api/
Method Type: DELETE
Req Fields: ---
*/
router.delete("/", (req, resp) => {
  return resp.json({ msg: "DELETE  Request" });
});

export default router;
