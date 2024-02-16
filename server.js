const express = require('express')
const app = express()
const port = 3000

const user = {
    userName: "Amit Morade",
    age: 23,
    country: "India",
    profession: "Student",
    contact: {
        phone: "343-588-1234",
        email: "xyz@gamil.com"
    }
}

let gender = "Male"

app.get('/user', (req, res) => {
  user.gender = gender;
  gender = gender==="Male" ? "Female" : "Male";
  console.log(gender)
  res.send(user)
})

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})