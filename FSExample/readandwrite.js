import fs from 'fs'
/*
let data=fs.readFileSync("abc.txt","utf-8")
fs.writeFileSync("xyz.txt",data)
console.log("New File Created ")
*/

fs.readFile("abc.txt","utf-8",(err,data)=>{
  if(err) throw err
  fs.writeFile("xyz.txt",data,(err)=>{
    if(err) throw err
    console.log("New File created successfully")
  })

})