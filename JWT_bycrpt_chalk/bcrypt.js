import bcrypt from "bcrypt";

let user = {
  email: "Rahul@gmail.com",
  cc: "1234123456756789",
  password: "IamGoodBoy",
};
//To generate hashed format salt is used
let salt = bcrypt.genSaltSync(10);
let new_CC = bcrypt.hashSync(user.cc, salt);
let new_PW = bcrypt.hashSync(user.password, salt);
console.log(new_CC);
console.log(new_PW);
