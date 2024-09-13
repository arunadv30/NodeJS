import fs from 'fs'

fs.readFile('data.json','utf-8', (err,data)=>{
  if(err) throw err
  // console.log(data)
  // console.log(typeof data)
  fs.writeFile('emp.json', data, (err)=>{
    if(err) throw error

    console.log("New JSON file is created")
  })
})