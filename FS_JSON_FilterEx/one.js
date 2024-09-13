import fs from 'fs'


fs.readFile('data.json','utf-8',(err,data)=>{
  if(err) throw err

  let users = JSON.parse(data) //converting string to object
  console.log(typeof users)
  console.log(typeof data)



  let male = users.filter(user => user.gender == 'Male')
  //console.log(male)
  let female = users.filter(user => user.gender == 'Female')
  //console.log(female)
  
  fs.writeFile('male.json',JSON.stringify(male),(err)=>{
    if(err) throw err
    console.log("Male file created")
  })
  fs.writeFile('female.json',JSON.stringify(female),(err)=>{
    if(err) throw err
    console.log("female file created")
  })


})