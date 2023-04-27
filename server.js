//hi server

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const dbConfig = require('./config/db.config.js');
const {StudentModel} = require("./models/student.js");

const app = express();

// app.use(express.urlencoded({ extended: true }));
// aspp.use('/users', userRoutes);

console.log(process.env.ENV_KEY)
main().then(() => {
        console.log("connected to mongodb")
    }
).catch(err => console.log(err));

const newProf = new StudentModel({
    firstName: "firstname",
    lastName: "",
    idNumber: "",
    password: "",
    email: "studentEntity.getEmail()",
    phone: "studentEntity.getPhone()",
    grade: "studentEntity.getGrade()",
    entranceYear: 2019,
    mean: 18,
    faculty: "studentEntity.getFaculty()",
    fieldOfStudy: "studentEntity.getFieldOfStudy()",
})

newProf.save().then((stud) => {
    console.log("inserted")
}).catch(err => {
    console.log(err)
})

// StudentModel

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/tamrin2');

}

app.listen(3000, () => console.log('Server started'))

