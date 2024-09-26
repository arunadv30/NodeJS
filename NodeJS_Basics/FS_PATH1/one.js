import fs from "fs";
import path from "path";

let datafile = path.join(process.cwd(), "static", "data", "data.json");
console.log(datafile);
let filepath = path.join(process.cwd(), "static", "male", "male.json");
console.log(filepath);

fs.readFile(datafile, "utf-8", (err, data) => {
  if (err) throw err;
  let users = JSON.parse(data);
  let male_users = users.filter((user) => {
    return user.gender === "Male";
  });
  let female_users = users.filter((user) => {
    return user.gender === "Female";
  });

  fs.writeFile(
    path.join(process.cwd(), "static", "male", "male.json"),
    JSON.stringify(male_users),
    (err) => {
      if (err) throw err;
      console.log("New male.json file created");
    }
  );
  fs.writeFile(
    path.join(process.cwd(), "static", "female", "female.json"),
    JSON.stringify(female_users),
    (err) => {
      if (err) throw err;
      console.log("New female.json file created");
    }
  );
});
