import jwt from "jsonwebtoken";

//Generating a token based on payload

let user_payload = {
  uname: "Rahul Gandhi",
  password: "IamGoodBoy",
};
let Secret_Key = "xyzABC123";
let token = jwt.sign(user_payload, Secret_Key);
console.log(token);

//Based on token get user details
let user_Data = jwt.verify(token, Secret_Key);
console.log(user_Data);
