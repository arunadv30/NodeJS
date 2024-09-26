import express from "express";
import fs from "fs";
let router = express.Router();

/*
Usage: create new employee/user/product/order
API URL: http://127.0.0.1:8080/api/create
Method Type: POST
Required Files: eid, ename, esal,loc
Access Type: public
Note: we need to create new employee if employee doesnt exist
*/

router.post("/create", async (req, res) => {
  let employee = req.body;
  //console.log(employee);
  let employees = await getEmployee();
  let emp_Data = employees.find((emp) => {
    return emp.eid == employee.eid;
  });
  console.log(emp_Data);
  if (emp_Data) {
    return res.status(401).json({ msg: "Employee Already Exist" }); //return stmt comes out of the block
  }
  employees.push(employee);
  saveEmployees(employees);
  return res.status(200).json({ msg: "New emp created" }); //return stmt comes out of the block
});
/*
Usage: create new employee/user/product/order
API URL: http://127.0.0.1:8080/api/read
Method Type: GET
Required Files: none
Access Type: public
Note: we need to create new employee if employee doesnt exist
*/
router.get("/read", async (req, res) => {
  let employees = await getEmployee();
  return res.json(employees);
});
/*
Usage: create new employee/user/product/order
API URL: http://127.0.0.1:8080/api/update/102
Method Type: PUT
Required Files: eid, ename, esal,loc
Access Type: public
Note: we need to create new employee if employee doesnt exist
*/
router.put("/update/:id", async (req, res) => {
  let emp_id = req.params.id; //reading from url

  let employee = req.body; //form data
  let employees = await getEmployee(); //reading from json file

  console.log(emp_id);
  console.log(employee);
  console.log(employees);
  let emp_Data = employees.find((emp) => {
    //to verify if employee is there or not
    return emp.eid == emp_id;
  });
  if (!emp_Data) {
    return res.status(401).json({ msg: "Employee not exists" });
  }
  let remaining_Employees = employees.filter((emp) => {
    return emp.eid != emp_id;
  });
  remaining_Employees.unshift(employee);
  console.log(remaining_Employees);
  saveEmployees(remaining_Employees);
  return res.status(200).json({ msg: "Employee Obj Updated" });
});

/*
Usage: create new employee/user/product/order
API URL: http://127.0.0.1:8080/api/del/102
Method Type: DELETE
Required Files: eid, ename, esal,loc
Access Type: public
Note: we need to create new employee if employee doesnt exist
*/
router.delete("/del/:id", async (req, res) => {
  let emp_id = req.params.id;
  let employees = await getEmployee();

  let emp_Data = employees.find((emp) => {
    return emp.eid == emp_id;
  });
  if (!emp_Data) {
    return res.status(401).json({ msg: "Employee data not exists" });
  }
  let remaining_Employees = employees.filter((emp) => {
    return emp.eid != emp_id;
  });
  saveEmployees(remaining_Employees);
  console.log(remaining_Employees);
  return res.status(200).json({ msg: "Deleted successsfully" });
});

let getEmployee = () => {
  let emp_Data = fs.readFileSync("data.json", "utf-8");
  return JSON.parse(emp_Data); //converting string to object
};

let saveEmployees = (employees) => {
  fs.writeFileSync("data.json", JSON.stringify(employees));
};
export default router;
