import bcrypt from "bcrypt";

let user = {
  email: "Rahul@gmail.com",
  password: "123456789",
  mobile: "91284311998",
};
//To generate hashed format salt is used
let salt = bcrypt.genSaltSync(10);
let new_PW = bcrypt.hashSync(user.password, salt);
console.log(new_PW);

let flag = bcrypt.compareSync("123456789", new_PW);

if (flag) {
  console.log("Login Successfull");
} else {
  console.log("Login Failed");
}
